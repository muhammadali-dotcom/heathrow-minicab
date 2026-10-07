import type { Metadata } from "next";
import { WebPageJsonLd } from "@/components/JsonLd";
import LegalDocument, { List, P, legalLink } from "@/components/LegalDocument";
import { pageMetadata } from "@/lib/seo";
import { BUSINESS_EMAIL, BUSINESS_SUMMARY, PRIMARY_PHONE } from "@/lib/site";

const seo = {
  title: "Privacy Policy | Heathrow Minicab",
  description:
    "How Heathrow Minicab collects, uses and protects your personal information when you book a Heathrow transfer, and how to exercise your rights.",
  path: "/privacy",
};

export const metadata: Metadata = pageMetadata(seo);

const email = (
  <a href={`mailto:${BUSINESS_EMAIL}`} className={`${legalLink} break-all`}>
    {BUSINESS_EMAIL}
  </a>
);
const phone = (
  <a href={`tel:${PRIMARY_PHONE.tel}`} className={legalLink}>
    {PRIMARY_PHONE.display}
  </a>
);

// Plain-English draft built from confirmed facts; have it reviewed before relying on it.
export default function Page() {
  return (
    <>
      <WebPageJsonLd {...seo} />
      <LegalDocument
        title="Privacy policy"
        crumb="Privacy policy"
        intro="How we handle your personal information when you book or contact us."
        sections={[
          {
            id: "who-we-are",
            title: "Who we are",
            body: (
              <>
                <P>{BUSINESS_SUMMARY}</P>
                <P>
                  We are responsible for the personal information described in this policy. You can
                  contact us about it by email at {email} or by phone on {phone}.
                </P>
              </>
            ),
          },
          {
            id: "information-we-collect",
            title: "Information we collect",
            body: (
              <>
                <P>When you book or contact us, we collect the details needed for your journey:</P>
                <List
                  items={[
                    "Your name, phone number and email address",
                    "Pickup and destination addresses",
                    "Flight number, terminal, date and time",
                    "Number of passengers and luggage",
                    "Children’s ages, if you request child seats",
                    "Any messages you send us by phone, WhatsApp or email",
                  ]}
                />
                <P>
                  If you book for someone else, please make sure they’re happy for you to share
                  their details with us.
                </P>
              </>
            ),
          },
          {
            id: "how-we-use-it",
            title: "How we use your information",
            body: (
              <List
                items={[
                  "To arrange and carry out your journey",
                  "To contact you about your booking, including on the day",
                  "To monitor your flight and adjust your pickup for delays",
                  "To answer your questions and handle any complaints",
                  "To keep booking and accounting records where the law requires",
                ]}
              />
            ),
          },
          {
            id: "lawful-bases",
            title: "Our lawful bases",
            body: (
              <List
                items={[
                  "Contract: to provide the journey you’ve booked or asked us to quote for.",
                  "Legitimate interests: to run our service, answer enquiries and keep it safe.",
                  "Legal obligation: to keep records we’re required to keep.",
                ]}
              />
            ),
          },
          {
            id: "sharing",
            title: "Who we share it with",
            body: (
              <>
                <P>We only share your information when it’s needed to provide our service:</P>
                <List
                  items={[
                    "The driver carrying out your journey",
                    "Our online booking system at bittacycars.com, which receives the details you enter when you book online",
                    "WhatsApp (Meta) or our email provider, when you contact us that way",
                    "The payment service used for online payments, under its own terms",
                    "The company that hosts this website, which keeps basic server logs",
                    "The police or other authorities, if the law requires it",
                  ]}
                />
                <P>We never sell your personal information.</P>
              </>
            ),
          },
          {
            id: "this-website",
            title: "This website and cookies",
            body: (
              <>
                <P>
                  This website doesn’t use analytics, advertising or tracking cookies. Our hosting
                  provider keeps basic technical logs, such as your IP address and browser type, to
                  keep the site secure and working.
                </P>
                <P>
                  Our online booking site and WhatsApp are run under their own privacy policies,
                  which apply when you use them.
                </P>
              </>
            ),
          },
          {
            id: "how-long",
            title: "How long we keep it",
            body: (
              <P>
                We keep your information only as long as we need it for your journey, any follow-up
                questions or complaints, and our legal and accounting requirements. After that we
                delete it securely.
              </P>
            ),
          },
          {
            id: "your-rights",
            title: "Your rights",
            body: (
              <>
                <P>Under UK data protection law, you can ask us to:</P>
                <List
                  items={[
                    "Give you a copy of the information we hold about you",
                    "Correct information that’s wrong or incomplete",
                    "Delete your information",
                    "Stop or limit how we use it",
                    "Send your information to you or another organisation",
                  ]}
                />
                <P>
                  To make a request, email {email} or call {phone}. If you’re unhappy with how we’ve
                  handled your information, you can complain to the Information Commissioner’s
                  Office at{" "}
                  <a
                    href="https://ico.org.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={legalLink}
                  >
                    ico.org.uk
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                  .
                </P>
              </>
            ),
          },
          {
            id: "changes",
            title: "Changes to this policy",
            body: (
              <P>
                We may update this policy from time to time. The date at the top of this page shows
                when it was last changed.
              </P>
            ),
          },
        ]}
      />
    </>
  );
}
