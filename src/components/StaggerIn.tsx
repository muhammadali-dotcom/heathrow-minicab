"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

// A group (grid or list) whose direct children rise in one after another the first time it
// scrolls into view (CSS in globals.css, keyed off data-stagger). Children render as they are.
// Only the "hidden" state hides anything, and it's only set for groups still below the fold, so
// if this never runs, or motion is reduced, the content is simply visible.
export default function StaggerIn({
  as: Tag = "div",
  className,
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const [state, setState] = useState<"idle" | "hidden" | "shown">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let first = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (first) {
          first = false;
          // Already on screen at load: leave it as it is.
          if (entry.isIntersecting) return observer.disconnect();
          setState("hidden");
          return;
        }
        if (entry.isIntersecting) {
          setState("shown");
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={className} data-stagger={state}>
      {children}
    </Tag>
  );
}
