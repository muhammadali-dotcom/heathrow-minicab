import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Privacy | Heathrow Minicab" };

export default function Page() {
  return <ComingSoon image="t2" title="Privacy" />;
}
