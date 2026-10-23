"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

export type TextPart = { text: string; className?: string };

const ease = [0.2, 0.7, 0.2, 1] as const;

// Hero heading load-in: each word slides in from the left, one after another. The words stay real
// text inside the h1 (only wrapped), so screen readers and search engines read the sentence as is.
export function HeroWords({ parts }: { parts: TextPart[] }) {
  const reduceMotion = useReducedMotion();
  let wordIndex = 0;

  return parts.map((part, p) => (
    <span key={part.text} className={part.className}>
      {p > 0 && " "}
      {part.text.split(" ").map((word, w) => {
        const delay = 0.15 + wordIndex++ * 0.06;
        return (
          <span key={w}>
            {w > 0 && " "}
            {reduceMotion ? (
              word
            ) : (
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease, delay }}
              >
                {word}
              </motion.span>
            )}
          </span>
        );
      })}
    </span>
  ));
}

// Supporting hero content that follows the heading in: from the left or rising from below.
export function HeroRise({
  children,
  delay,
  from = "below",
  className,
}: {
  children: ReactNode;
  delay: number;
  from?: "left" | "below";
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...(from === "left" ? { x: -80 } : { y: 24 }) }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.7, ease, delay }}
    >
      {children}
    </motion.div>
  );
}
