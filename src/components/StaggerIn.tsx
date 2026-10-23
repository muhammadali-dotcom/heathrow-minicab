"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { useReveal } from "@/lib/useReveal";

// A group (grid or list) whose direct children animate in one after another each time it comes
// back into view: rising from below when scrolling down, dropping from above when scrolling up
// (CSS in globals.css, keyed off data-stagger and data-from). Children render as they are. Only
// the "hidden" state hides anything, and only off screen, so if this never runs, or motion is
// reduced, the content is simply visible.
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
  const { state, from } = useReveal(ref);

  return (
    <Tag ref={ref} className={className} data-stagger={state} data-from={from}>
      {children}
    </Tag>
  );
}
