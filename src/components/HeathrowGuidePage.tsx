import BookingCta from "@/components/BookingCta";
import {
  CheckList,
  InfoList,
  MeetingPanel,
  RelatedLinks,
  inlineLink,
  sectionHeading,
} from "@/components/GuideBlocks";
import PageBanner from "@/components/PageBanner";
import { CHECKLIST, type InfoItem } from "@/lib/airportGuidance";
import { SECTION_CONTAINER } from "@/lib/layout";
import { TERMINALS, WHICH_TERMINAL_URL } from "@/lib/terminals";

type HeathrowGuidePageProps = {
  kind: "pickups" | "drop-offs";
  title: string;
  intro: string;
  image: "arrival" | "early";
  stepsHeading: string;
  steps: InfoItem[];
};

// Shared layout for the Heathrow Pickups and Heathrow Drop-offs pages.
export default function HeathrowGuidePage({
  kind,
  title,
  intro,
  image,
  stepsHeading,
  steps,
}: HeathrowGuidePageProps) {
  const other =
    kind === "pickups"
      ? { href: "/airport-transfers/heathrow-drop-offs", label: "Heathrow drop-offs" }
      : { href: "/airport-transfers/heathrow-pickups", label: "Heathrow pickups" };

  return (
    <>
      <PageBanner
        image={image}
        crumb={title}
        parent={{ href: "/airport-transfers", label: "Airport Transfers" }}
        title={title}
        intro={intro}
      />

      <section aria-labelledby="steps-heading" className="py-14 md:py-20">
        <div className={SECTION_CONTAINER}>
          <h2 id="steps-heading" className={sectionHeading}>
            {stepsHeading}
          </h2>
          <InfoList items={steps} />
        </div>
      </section>

      <section aria-labelledby="detail-heading" className="bg-[#E6F6FC] py-14 md:py-20">
        <div className={`${SECTION_CONTAINER} grid gap-10 md:grid-cols-2`}>
          {kind === "pickups" ? (
            <div>
              <h2 id="detail-heading" className={sectionHeading}>
                Meeting your driver
              </h2>
              <div className="mt-6">
                <MeetingPanel />
              </div>
            </div>
          ) : (
            <div>
              <h2 id="detail-heading" className={sectionHeading}>
                Check your terminal
              </h2>
              <p className="mt-6 leading-relaxed text-[#0A2740]/80">
                Airlines can change terminals. Check with your airline or Heathrow’s official
                terminal guide before you travel, and let us know if your terminal changes.
              </p>
              <a
                href={WHICH_TERMINAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${inlineLink} mt-2 gap-1`}
              >
                Which terminal is my airline? <span aria-hidden="true">↗</span>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
          )}
          <div>
            <h2 className={sectionHeading}>Before you travel</h2>
            <div className="mt-6">
              <CheckList items={CHECKLIST} />
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="book-heading" className="py-14 md:py-16">
        <div className={`${SECTION_CONTAINER} flex flex-col gap-6 md:flex-row md:items-center md:justify-between`}>
          <h2 id="book-heading" className={sectionHeading}>
            Book your Heathrow {kind === "pickups" ? "pickup" : "drop-off"}
          </h2>
          <BookingCta />
        </div>
      </section>

      <RelatedLinks
        heading="More Heathrow guides"
        links={[
          other,
          ...TERMINALS.map((t) => ({ href: `/airport-transfers/${t.slug}`, label: t.name })),
          { href: "/our-vehicles", label: "Our vehicles" },
        ]}
      />
    </>
  );
}
