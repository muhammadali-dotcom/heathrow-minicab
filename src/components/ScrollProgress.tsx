"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

// Thin blue line along the header's bottom edge showing how far down the page you are: it fills
// as you scroll down and empties as you scroll up. Driven by scaleX so the header never repaints.
export default function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    let frame = 0;
    function update() {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${progress})`;
    }
    function schedule() {
      if (!frame) frame = requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    // Page height changes too (accordions opening, images loading).
    const observer = new ResizeObserver(schedule);
    observer.observe(document.body);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <div
      ref={bar}
      aria-hidden="true"
      // Inline transform, not Tailwind's scale-x-0: that sets the separate `scale` property,
      // which would multiply with the transform and keep the bar at zero.
      style={{ transform: "scaleX(0)" }}
      className="pointer-events-none absolute inset-x-0 -bottom-px h-[3px] origin-left bg-[#1FA3D6]"
    />
  );
}
