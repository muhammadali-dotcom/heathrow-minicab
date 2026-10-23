"use client";

import { useEffect, useState, type RefObject } from "react";

export type RevealState = "idle" | "hidden" | "shown";
export type RevealFrom = "above" | "below";

// Scroll-reveal state for an element, replayed every time it comes back into view.
// - idle: on screen at load (or reduced motion): just visible, no animation.
// - hidden: off screen, waiting. `from` is the side it left by, which is the side it will come
//   back from: scrolled past the top → "above" (drops in on the way back up), else "below".
// - shown: has come into view; animate in from `from`.
export function useReveal(ref: RefObject<HTMLElement | null>, { enter = 0.2 } = {}) {
  const [reveal, setReveal] = useState<{ state: RevealState; from: RevealFrom }>({
    state: "idle",
    from: "below",
  });

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let first = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const visibleEnough =
          entry.intersectionRatio >= enter ||
          entry.intersectionRect.height >= window.innerHeight * enter;
        if (first) {
          first = false;
          if (!entry.isIntersecting) setReveal({ state: "hidden", from: "below" });
          return;
        }
        if (!entry.isIntersecting) {
          setReveal({
            state: "hidden",
            from: entry.boundingClientRect.top < 0 ? "above" : "below",
          });
        } else if (visibleEnough) {
          setReveal((r) => (r.state === "hidden" ? { ...r, state: "shown" } : r));
        }
      },
      { threshold: [0, enter] },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, enter]);

  return reveal;
}
