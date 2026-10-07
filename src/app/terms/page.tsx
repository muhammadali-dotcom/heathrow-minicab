import type { Metadata } from "next";
import Link from "next/link";
import { WebPageJsonLd } from "@/components/JsonLd";
import LegalDocument, { List, P, legalLink } from "@/components/LegalDocument";
import { pageMetadata } from "@/lib/seo";
import { BUSINESS_EMAIL, PRIMARY_PHONE, SITE_NAME } from "@/lib/site";

const seo = {
  title: "Booking Terms | Heathrow Minicab",
  description:
    "Booking terms for Heathrow Minicab transfers: quotes and fixed prices, payment, waiting time, changes and cancellations, luggage and child seats.",
  path: "/terms",
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
        title="Booking terms"
        crumb="Booking terms"
        intro="What to expect when you book a Heathrow transfer with us."
        sections={[
          {
            id: "about",
            title: "About these terms",
            body: (
              <P>
                These terms apply to journeys booked with {SITE_NAME}, online, by phone or on
                WhatsApp. By making a booking, you agree to them. Anything confirmed with you when
                you book also forms part of your booking.
              </P>
            ),
          },
          {
            id: "booking",
            title: "Making a booking",
            body: (
              <>
                <P>
                  Your booking is confirmed once we’ve confirmed your journey details and quote.
                  Please make sure the details you give us are correct, including:
                </P>
                <List
                  items={[
                    "Pickup and destination addresses",
                    "Flight number, terminal, date and time",
                    "Number of passengers and luggage",
                    "A mobile number we can reach on the day",
                  ]}
                />
              </>
            ),
          },
          {
            id: "prices",
            title: "Prices",
            body: (
              <List
                items={[
                  "Prices depend on the time, day and route of your journey.",
                  "Once your quote is confirmed, the price is fixed. There’s no meter, so traffic doesn’t change the fare.",
                  "Waiting, parking and any extras are covered as agreed in your quote.",
                  "The Heathrow drop-off charge isn’t part of the journey price; it’s added to your quote so you see the full cost before you book.",
                  "If you change your journey, for example by adding a stop or changing the time, the price may change. We’ll confirm any new price with you first.",
                ]}
              />
            ),
          },
          {
            id: "payment",
            title: "Payment",
            body: (
              <P>
                We accept cash and online payment. Please confirm your preferred payment method, and
                any payment instructions, when you book.
              </P>
            ),
          },
          {
            id: "pickups-and-waiting",
            title: "Pickups and waiting time",
            body: (
              <List
                items={[
                  "Your meeting arrangement is confirmed when you book: inside arrivals with a name board, or at an agreed pickup point.",
                  "We monitor your flight and adjust your pickup for delays. Please also tell us if your flight changes.",
                  "Your pickup includes 15 minutes of free waiting, starting at your agreed pickup time. Waiting after that is charged at the rate confirmed before you book.",
                  <>
                    Keep your phone switched on. If you can’t find your driver, stay in a clearly
                    signed spot and call {phone}.
                  </>,
                ]}
              />
            ),
          },
          {
            id: "changes-and-cancellations",
            title: "Changes and cancellations",
            body: (
              <P>
                If you need to change or cancel your booking, please call us on {phone} as soon as
                possible. We’ll confirm your options and any applicable charges before going ahead.
              </P>
            ),
          },
          {
            id: "passengers-luggage",
            title: "Passengers, luggage and child seats",
            body: (
              <List
                items={[
                  <>
                    Each vehicle has a passenger and luggage limit; see{" "}
                    <Link href="/our-vehicles" className={legalLink}>
                      our vehicles
                    </Link>
                    . Tell us about all passengers, luggage and any bulky items when you book so we
                    can send a suitable vehicle.
                  </>,
                  "Child seats are available on request at no extra cost. Tell us each child’s age when you book.",
                ]}
              />
            ),
          },
          {
            id: "journey-times",
            title: "Journey times and connections",
            body: (
              <P>
                We plan collection times around your flight and traffic, but we can’t guarantee
                journey times or flight connections. Please allow enough time for check-in, security
                and, for airport-to-airport transfers, passport control and baggage collection.
              </P>
            ),
          },
          {
            id: "in-the-vehicle",
            title: "In the vehicle",
            body: (
              <P>
                For everyone’s safety, seat belts must be worn and smoking isn’t allowed in our
                vehicles.
              </P>
            ),
          },
          {
            id: "lost-property",
            title: "Lost property",
            body: (
              <P>
                If you leave something in a vehicle, contact us on {phone} or at {email} as soon as
                possible and we’ll do our best to help.
              </P>
            ),
          },
          {
            id: "complaints",
            title: "Complaints",
            body: (
              <P>
                If something isn’t right, please tell us by phone on {phone} or by email at {email}.
                We’ll look into it and get back to you.
              </P>
            ),
          },
          {
            id: "law",
            title: "Governing law",
            body: <P>These terms are governed by the law of England and Wales.</P>,
          },
        ]}
      />
    </>
  );
}
