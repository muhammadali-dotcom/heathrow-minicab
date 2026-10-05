import type { Metadata } from "next";
import { redirect } from "next/navigation";
import BookingCta from "@/components/BookingCta";
import PageBanner from "@/components/PageBanner";
import { BOOKING_URL } from "@/lib/site";
import { SECTION_CONTAINER } from "@/lib/layout";

// While online booking is being set up this page asks visitors to call, and stays out of
// search results. Once NEXT_PUBLIC_BOOKING_URL is set it forwards straight to the booker.
export const metadata: Metadata = {
  title: "Book Online | Heathrow Minicab",
  ...(BOOKING_URL ? {} : { robots: { index: false } }),
};

export default function Page() {
  if (BOOKING_URL) redirect(BOOKING_URL);

  return (
    <>
      <PageBanner
        image="t2"
        crumb="Book Online"
        title="Book your Heathrow transfer"
        intro="Online booking is being set up. Call us now and we’ll help plan your transfer."
      />
      <div className={`${SECTION_CONTAINER} py-14 md:py-16`}>
        <BookingCta online={false} />
      </div>
    </>
  );
}
