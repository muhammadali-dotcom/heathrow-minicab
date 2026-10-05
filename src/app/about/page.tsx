import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = { title: "About Us | Heathrow Minicab" };

export default function Page() {
  return <ComingSoon image="t4" title="About Us" />;
}
