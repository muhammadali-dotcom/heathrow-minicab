"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { TextPart } from "@/components/HeroWords";

const heading: Variants = { shown: { transition: { staggerChildren: 0.07 } } };
const word: Variants = {
  hidden: { y: "110%" },
  shown: { y: "0%", transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] } },
};

// Section heading whose words rise, one after another, out of a hidden slot under the text the
// first time it's mostly on screen. The words stay real text; the bottom padding keeps g/y/p from
// being clipped. With reduced motion it's plain text.
export default function MaskHeading({
  id,
  className,
  parts,
}: {
  id?: string;
  className?: string;
  parts: TextPart[];
}) {
  const reduceMotion = useReducedMotion();

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
              <motion.span className="inline-block" variants={word}>
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
      id={id}
      className={className}
      variants={heading}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.6 }}
    >
      {content}
    </motion.h2>
  );
}
