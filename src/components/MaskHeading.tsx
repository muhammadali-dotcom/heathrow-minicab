"use client";

import { useRef } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import type { TextPart } from "@/components/HeroWords";
import { useReveal, type RevealFrom } from "@/lib/useReveal";

const heading: Variants = {
  hidden: { transition: { staggerChildren: 0 } },
  shown: { transition: { staggerChildren: 0.07 } },
};
const word: Variants = {
  // Reset instantly while off screen, on the side it will come back from.
  hidden: (from: RevealFrom) => ({
    y: from === "above" ? "-110%" : "110%",
    transition: { duration: 0 },
  }),
  shown: { y: "0%", transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] } },
};

// Section heading whose words move, one after another, out of a hidden slot into place each time
// it comes back into view: up from below when scrolling down, down from above when scrolling up.
// The words stay real text; the bottom padding keeps g/y/p from being clipped. With reduced motion
// it's plain text.
export default function MaskHeading({
  id,
  className,
  parts,
}: {
  id?: string;
  className?: string;
  parts: TextPart[];
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const reduceMotion = useReducedMotion();
  const { state, from } = useReveal(ref, { enter: 0.6 });

  const content = parts.map((part, p) => (
    <span key={part.text} className={part.className}>
      {p > 0 && " "}
      {part.text.split(" ").map((text, w) => (
        <span key={w}>
          {w > 0 && " "}
          {reduceMotion ? (
            text
          ) : (
            <span className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] align-bottom">
              <motion.span className="inline-block" variants={word} custom={from}>
                {text}
              </motion.span>
            </span>
          )}
        </span>
      ))}
    </span>
  ));

  if (reduceMotion) {
    return (
      <h2 id={id} className={className}>
        {content}
      </h2>
    );
  }

  return (
    <motion.h2
      ref={ref}
      id={id}
      className={className}
      variants={heading}
      initial={false}
      animate={state === "hidden" ? "hidden" : "shown"}
      custom={from}
    >
      {content}
    </motion.h2>
  );
}
