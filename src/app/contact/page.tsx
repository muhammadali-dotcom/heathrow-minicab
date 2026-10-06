import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageBanner from "@/components/PageBanner";
import { PHONE_NUMBERS } from "@/lib/site";
import { SECTION_CONTAINER } from "@/lib/layout";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Contact Heathrow Minicab | Call 020 8343 4444",
    description:
      "Call 020 8343 4444 or 020 8569 4040, or message us on WhatsApp, to book or ask about a Heathrow airport transfer. Available 24/7.",
    path: "/contact",
  }),
};

export default function Page() {
  return (
    <>
      <PageBanner
        image="t4"
        title="Contact"
        intro="Call us to book or plan your Heathrow transfer."
      />
      <div className={`${SECTION_CONTAINER} py-16 md:py-20`}>
        <ul className="grid gap-6 md:grid-cols-2">
          {PHONE_NUMBERS.map((phone) => (
            <li key={phone.tel} className="rounded-2xl border border-[#E6F6FC] p-6">
              <p className="text-sm font-semibold tracking-[0.15em] text-[#0A2740]/70 uppercase">
                {phone.label}
              </p>
              <a
                href={`tel:${phone.tel}`}
                className="mt-2 inline-block rounded-sm text-2xl font-bold text-[#0A2740] hover:text-[#1FA3D6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2740] md:text-3xl"
              >
                {phone.display}
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-[#0A2740]/80">Email and enquiry form coming soon.</p>
      </div>
    </>
  );
}
