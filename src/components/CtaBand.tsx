import Image from "next/image";
import BookingCta from "@/components/BookingCta";
import { SECTION_CONTAINER } from "@/lib/layout";

// Full-width closing call to action above the footer links: the Terminal 5 photo under an even
// 70% navy tint (no gradient) so the white headline reads clearly over the bright glass.
export default function CtaBand() {
  return (
    <section aria-labelledby="cta-band-heading" className="relative overflow-hidden bg-[#0A2740]">
      <Image
        src="/images/cta-terminal5.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[#0A2740]/70" />

      <div className={`relative ${SECTION_CONTAINER} py-20 text-center md:py-28`}>
        <h2
          id="cta-band-heading"
          className="text-3xl leading-tight font-bold tracking-tight text-balance text-white md:text-5xl"
        >
          Airport Transfers All Day, Every Day
        </h2>
        <div className="mt-8">
          <BookingCta tone="dark" align="center" />
        </div>
      </div>
    </section>
  );
}
