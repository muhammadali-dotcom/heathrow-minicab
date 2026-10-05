"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

// Renders its children everywhere except under the given path prefixes.
export default function HideOnPaths({ prefixes, children }: { prefixes: string[]; children: ReactNode }) {
  const pathname = usePathname();
  return prefixes.some((prefix) => pathname.startsWith(prefix)) ? null : children;
}
