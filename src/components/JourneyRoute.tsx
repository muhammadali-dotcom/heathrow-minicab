"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import PlaneIcon from "@/components/PlaneIcon";

type Point = [number, number];

type Geometry = {
  connectors: string[];
  tail?: string;
  dots: Point[];
  plane?: Point;
  carPath: string;
  vertical: boolean; // stacked (mobile) layout: straight route, no car or plane
  pause: number; // fraction of the car path where it pauses (just before stop 02)
};

const GAP = 12; // clear space between the route and every tile
const H_AMP = 56; // S-curve control offset, horizontal route (~±16px swing)
const TAIL = 56;

const PLANE_REST = "translate(-50%, -50%) rotate(90deg)";
const PLANE_LIFTED = "translate(calc(-50% + 10px), calc(-50% - 12px)) rotate(70deg)";

// One 10s cycle: fade in, drive to 02, pause, drive on to 03, rest, fade out.
const CYCLE = 10000;

function carKeyframes(pause: number): Keyframe[] {
  const stop = `${(pause * 100).toFixed(2)}%`;
  return [
    { offset: 0, offsetDistance: "0%", opacity: 0 },
    { offset: 0.03, offsetDistance: "0%", opacity: 1, easing: "ease-in-out" },
    { offset: 0.18, offsetDistance: stop },
    { offset: 0.24, offsetDistance: stop, easing: "ease-in-out" },
    { offset: 0.45, offsetDistance: "100%" },
    { offset: 0.95, offsetDistance: "100%", opacity: 1 },
    { offset: 1, offsetDistance: "100%", opacity: 0 },
  ];
}

// Plane lifts off once the car arrives, then fades and resets before the next run.
const planeKeyframes: Keyframe[] = [
  { offset: 0, transform: PLANE_REST, opacity: 1 },
  { offset: 0.45, transform: PLANE_REST, easing: "ease-out" },
  { offset: 0.53, transform: PLANE_LIFTED },
  { offset: 0.95, transform: PLANE_LIFTED, opacity: 1 },
  { offset: 0.98, transform: PLANE_LIFTED, opacity: 0 },
  { offset: 0.99, transform: PLANE_REST, opacity: 0 },
  { offset: 1, transform: PLANE_REST, opacity: 1 },
];

function pathLength(d: string) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", d);
  svg.style.cssText = "position:absolute;width:0;height:0;visibility:hidden";
  svg.appendChild(path);
  document.body.appendChild(svg);
  const length = path.getTotalLength();
  svg.remove();
  return length;
}

function buildGeometry(wrapper: HTMLElement): Geometry | null {
  const stops = [...wrapper.querySelectorAll<HTMLElement>("[data-stop]")];
  if (stops.length < 2) return null;

  const base = wrapper.getBoundingClientRect();
  const rects = stops.map((stop) => {
    const b = stop.getBoundingClientRect();
    const l = b.left - base.left;
    const t = b.top - base.top;
    return { l, t, r: l + b.width, b: t + b.height, cx: l + b.width / 2, cy: t + b.height / 2 };
  });
  const vertical = rects[1].t >= rects[0].b;

  const connectors: string[] = [];
  const dots: Point[] = [];
  let carPath = "";
  let firstLength = 0;

  rects.slice(0, -1).forEach((a, i) => {
    const z = rects[i + 1];
    let start: Point;
    let end: Point;
    let curve: string;

    if (vertical) {
      const x = a.cx;
      const y0 = a.b + GAP;
      const y1 = z.t - GAP;
      start = [x, y0];
      end = [x, y1];
      // Mobile: a simple straight connector down the tile column.
      curve = `L${x} ${y1}`;
    } else {
      const y = a.cy;
      const x0 = a.r + GAP;
      const x1 = z.l - GAP;
      const w = x1 - x0;
      start = [x0, y];
      end = [x1, y];
      curve = `C${x0 + w * 0.35} ${y + H_AMP} ${x1 - w * 0.35} ${y - H_AMP} ${x1} ${y}`;
    }

    const d = `M${start[0]} ${start[1]} ${curve}`;
    connectors.push(d);
    dots.push(start, end);
    // The car drives straight through (behind) each intermediate tile.
    carPath += i === 0 ? d : ` L${start[0]} ${start[1]} ${curve}`;
    if (i === 0) firstLength = pathLength(d);
  });

  let tail: string | undefined;
  let plane: Point | undefined;
  if (!vertical) {
    const last = rects[rects.length - 1];
    const x0 = last.r + GAP;
    tail = `M${x0} ${last.cy} H${x0 + TAIL}`;
    plane = [x0 + TAIL + 14, last.cy];
    dots.push([x0, last.cy]);
  }

  return {
    connectors,
    tail,
    dots,
    plane,
    carPath,
    vertical,
    pause: firstLength / pathLength(carPath),
  };
}

function Car() {
  // Top-down car, nose pointing right (offset-rotate turns it along the route).
  return (
    <svg viewBox="0 0 28 14" className="block h-[14px] w-[28px]">
      <rect width="28" height="14" rx="4" fill="#0A2740" />
      <rect x="16" y="2" width="5" height="10" rx="1.5" fill="#E6F6FC" />
      <rect x="4" y="2.5" width="3" height="9" rx="1" fill="#E6F6FC" opacity="0.7" />
      <rect x="25.5" y="2" width="2" height="2.5" rx="0.5" fill="#FFFFFF" />
      <rect x="25.5" y="9.5" width="2" height="2.5" rx="0.5" fill="#FFFFFF" />
    </svg>
  );
}

export default function JourneyRoute({ children }: { children: ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const planeRef = useRef<HTMLDivElement>(null);
  const geometryRef = useRef<Geometry | null>(null);
  const carAnim = useRef<Animation | null>(null);
  const planeAnim = useRef<Animation | null>(null);
  const [geometry, setGeometry] = useState<Geometry | null>(null);
  const [reduced, setReduced] = useState(false);
  const hasGeometry = geometry !== null;

  // Measure the tiles and rebuild the route whenever the layout changes.
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const observer = new ResizeObserver(() => {
      setGeometry(buildGeometry(wrapper));
      setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    });
    observer.observe(wrapper);
    return () => observer.disconnect();
  }, []);

  // Keep running animations in step with the latest route (resize, rotation).
  useEffect(() => {
    geometryRef.current = geometry;
    if (!geometry) return;
    if (geometry.vertical) {
      // The car and plane are not rendered on the stacked layout.
      carAnim.current?.cancel();
      planeAnim.current?.cancel();
      carAnim.current = null;
      planeAnim.current = null;
      return;
    }
    const car = carAnim.current;
    if (!car) return;
    (car.effect as KeyframeEffect).setKeyframes(carKeyframes(geometry.pause));

    const plane = planeRef.current;
    const current = planeAnim.current;
    if (current && (current.effect as KeyframeEffect).target !== plane) {
      current.cancel();
      planeAnim.current = null;
    }
    if (plane && !planeAnim.current) {
      const anim = plane.animate(planeKeyframes, { duration: CYCLE, iterations: Infinity });
      anim.currentTime = car.currentTime;
      if (car.playState === "paused") anim.pause();
      planeAnim.current = anim;
    }
  }, [geometry]);

  // Loop every 10s while the route is on screen; pause when it scrolls away.
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!hasGeometry || reduced || !wrapper) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const anims = [carAnim.current, planeAnim.current];
        if (!entry.isIntersecting) {
          anims.forEach((anim) => anim?.pause());
          return;
        }
        if (carAnim.current) {
          anims.forEach((anim) => anim?.play());
          return;
        }
        const car = carRef.current;
        const route = geometryRef.current;
        if (!car || !route) return;
        carAnim.current = car.animate(carKeyframes(route.pause), {
          duration: CYCLE,
          iterations: Infinity,
        });
        planeAnim.current =
          planeRef.current?.animate(planeKeyframes, { duration: CYCLE, iterations: Infinity }) ??
          null;
      },
      { threshold: 0.4 },
    );
    observer.observe(wrapper);
    return () => {
      observer.disconnect();
      carAnim.current?.cancel();
      planeAnim.current?.cancel();
      carAnim.current = null;
      planeAnim.current = null;
    };
  }, [hasGeometry, reduced]);

  return (
    <div ref={wrapperRef} className="relative">
      {geometry && (
        <>
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
          >
            {[...geometry.connectors, ...(geometry.tail ? [geometry.tail] : [])].map((d) => (
              <path
                key={d}
                d={d}
                fill="none"
                stroke="#1FA3D6"
                strokeWidth="2"
                strokeDasharray="6 6"
                strokeLinecap="round"
              />
            ))}
            {geometry.dots.map(([x, y]) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="3" fill="#1FA3D6" />
            ))}
          </svg>

          {!geometry.vertical && (
            <div
              ref={carRef}
              aria-hidden="true"
              className="pointer-events-none absolute top-0 left-0"
              style={{
                offsetPath: `path("${geometry.carPath}")`,
                offsetRotate: "auto",
                offsetAnchor: "center",
                offsetDistance: reduced ? "100%" : "0%",
              }}
            >
              <Car />
            </div>
          )}

          {geometry.plane && (
            <div
              ref={planeRef}
              aria-hidden="true"
              className="pointer-events-none absolute text-[#1FA3D6]"
              style={{
                left: geometry.plane[0],
                top: geometry.plane[1],
                transform: reduced ? PLANE_LIFTED : PLANE_REST,
              }}
            >
              <PlaneIcon className="h-5 w-5" />
            </div>
          )}
        </>
      )}
      {children}
    </div>
  );
}
