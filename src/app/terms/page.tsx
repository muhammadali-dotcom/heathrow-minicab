import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Terms | Heathrow Minicab" };

export default function Page() {
  return <ComingSoon image="t2" title="Terms" />;
}
