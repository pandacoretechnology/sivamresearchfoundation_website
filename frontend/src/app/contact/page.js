import Image from "next/image";
import Link from "next/link";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  CalendarDaysIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/outline";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Contact Us | Sivam Research Foundation",
  description:
    "Contact Sivam Research Foundation for inquiries, consultations, and admissions. Reach our team by phone, email, or WhatsApp.",
  keywords: [
    "Sivam Research Foundation",
    "contact Sivam Research Foundation",
    "research foundation Tamil Nadu",
    "consultation",
    "admissions",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Contact Us | Sivam Research Foundation",
    description:
      "Get in touch with Sivam Research Foundation by phone, email, or WhatsApp.",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/contact/contact_hero.png",
        alt: "Contact Sivam Research Foundation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Sivam Research Foundation",
    description:
      "Reach Sivam Research Foundation by phone, email, or WhatsApp.",
    images: ["/images/contact/contact_hero.png"],
  },
};

const contactDetails = {
  name: "Sivam Research Foundation",
  phone: "+919952941614",
  phoneDisplay: "(+91) 9952 9416 14",
  email: "support@sivamresearchfoundation.org",
  whatsapp: "https://wa.me/919952941614",
  address: "Tamil Nadu, India",
};

const officeHours = [
  { day: "Monday", hours: "9:30 AM – 5:00 PM" },
  { day: "Tuesday", hours: "9:30 AM – 5:00 PM" },
  { day: "Wednesday", hours: "9:30 AM – 5:00 PM" },
  { day: "Thursday", hours: "9:30 AM – 5:00 PM" },
  { day: "Friday", hours: "9:30 AM – 5:00 PM" },
  { day: "Saturday", hours: "9:30 AM – 6:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

const mapSearchUrl =
  "https://www.google.com/maps/search/?api=1&query=Sivam+Research+Foundation%2C+Tamil+Nadu%2C+India";

const mapEmbedUrl =
  "https://maps.google.com/maps?q=Sivam%20Research%20Foundation%2C%20Tamil%20Nadu%2C%20India&output=embed";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: contactDetails.name,
  description:
    "Sivam Research Foundation. Contact the foundation for inquiries and consultations.",
  email: contactDetails.email,
  telephone: contactDetails.phone,
  address: {
    "@type": "PostalAddress",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: contactDetails.phone,
    email: contactDetails.email,
    contactType: "customer service",
    availableLanguage: ["English", "Tamil"],
  },
};

function SectionHeading({ eyebrow, title, accent }) {
  return (
    <div className="mb-8">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#0F6E57]">
        {eyebrow}
      </p>

      <h2 className="text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">
        {title} <span className="text-[#0F6E57]">{accent}</span>
      </h2>
    </div>
  );
}

function ContactCard({ icon: Icon, label, children, href, external = false }) {
  const content = (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-[#0F6E57] transition-colors group-hover:bg-[#0F6E57] group-hover:text-white">
        <Icon aria-hidden="true" className="h-5 w-5" />
      </span>

      <span className="min-w-0 flex-1">
        <span className="mb-1 block text-xs font-medium text-gray-500">
          {label}
        </span>
        <span className="block break-words text-sm font-semibold leading-relaxed text-gray-900 sm:text-base">
          {children}
        </span>
      </span>

      {href && external && (
        <ArrowUpRightIcon
          aria-hidden="true"
          className="h-4 w-4 shrink-0 text-gray-400"
        />
      )}
    </>
  );

  const className =
    "group flex min-w-0 items-center gap-3 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F6E57] focus-visible:ring-offset-2";

  if (href) {
    return (
      <a
        href={href}
        className={className}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}

function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6 ${className}`}
    >
      {children}
    </div>
  );
}

export default function Contact() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-x-clip bg-white pb-16 sm:pb-20">
        {/* SEO structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />

        {/* Hero */}
        <section
          aria-label="Contact Sivam Research Foundation"
          className="relative isolate h-[300px] w-full overflow-hidden bg-gray-100 sm:h-[400px] lg:h-[500px]"
        >
          <Image
            src="/images/contact/contact_hero.png"
            alt="Get in touch with Sivam Research Foundation"
            fill
            priority
            sizes="100vw"
            className="hidden object-cover object-center md:block"
          />

          <Image
            src="/images/contact/contact_hero_mob.png"
            alt="Get in touch with Sivam Research Foundation"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center md:hidden"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-black/5"
          />
        </section>

        {/* Main contact cards */}
        <section
          aria-label="Contact details and operating hours"
          className="relative z-10 mx-auto -mt-10 w-full max-w-6xl px-4 sm:-mt-16 sm:px-6 lg:-mt-24 lg:px-8"
        >
          <div className="rounded-3xl border border-gray-100 bg-[#f7f8f7] p-3 shadow-xl shadow-gray-900/5 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-2 lg:gap-6">
              {/* Contact information */}
              <div className="flex min-w-0 flex-col gap-4 sm:gap-6">
                <Card>
                  <div className="mb-6">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#0F6E57]">
                      We are here to help
                    </p>

                    <h1 className="text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">
                      Contact Info
                    </h1>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      Have a question? Reach out to our team using any of the
                      contact options below.
                    </p>
                  </div>

                  <div className="space-y-5">
                    <ContactCard
                      icon={PhoneIcon}
                      label="Call / Helpline"
                      href={`tel:${contactDetails.phone}`}
                    >
                      {contactDetails.phoneDisplay}
                    </ContactCard>

                    <ContactCard
                      icon={EnvelopeIcon}
                      label="Email Address"
                      href={`mailto:${contactDetails.email}`}
                    >
                      {contactDetails.email}
                    </ContactCard>
                  </div>

                  <div className="mt-6 border-t border-gray-100 pt-5">
                    <a
                      href={contactDetails.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Chat with Sivam Research Foundation on WhatsApp"
                      className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1EBE5D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#128C7E] focus-visible:ring-offset-2"
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-5 w-5 fill-current"
                      >
                        <path d="M20.52 3.48A11.87 11.87 0 0 0 12.05 0C5.45 0 .08 5.37.08 11.97c0 2.11.55 4.17 1.6 5.98L0 24l6.2-1.63a11.94 11.94 0 0 0 5.85 1.49h.01c6.6 0 11.97-5.37 11.97-11.97a11.9 11.9 0 0 0-3.51-8.41ZM12.06 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.68.96.98-3.59-.23-.37a9.86 9.86 0 0 1-1.51-5.24c0-5.43 4.42-9.85 9.86-9.85a9.8 9.8 0 0 1 6.97 2.89 9.8 9.8 0 0 1 2.88 6.98c0 5.43-4.42 9.85-9.86 9.85Zm5.41-7.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.51-1.79-1.69-2.09-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.08-.8.38-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.3 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                      </svg>

                      Chat on WhatsApp
                      <ArrowUpRightIcon
                        aria-hidden="true"
                        className="h-4 w-4"
                      />
                    </a>

                    <p className="mt-3 text-center text-xs leading-5 text-gray-500">
                      Connect with us directly for inquiries and assistance.
                    </p>
                  </div>
                </Card>

                {/* Location */}
                <Card className="flex-1">
                  <h2 className="mb-5 text-xl font-bold text-gray-950">
                    Our Location
                  </h2>

                  <ContactCard icon={MapPinIcon} label="Registered Office">
                    {contactDetails.name}, {contactDetails.address}
                  </ContactCard>

                  <a
                    href={mapSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex min-h-10 items-center gap-2 rounded-lg text-sm font-semibold text-[#0F6E57] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F6E57] focus-visible:ring-offset-2"
                  >
                    Find us on Google Maps
                    <ArrowUpRightIcon
                      aria-hidden="true"
                      className="h-4 w-4"
                    />
                  </a>
                </Card>
              </div>

              {/* Opening hours */}
              <Card className="flex min-w-0 flex-col">
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-[#0F6E57]">
                    <ClockIcon
                      aria-hidden="true"
                      className="h-5 w-5"
                    />
                  </span>

                  <div>
                    <h2 className="text-xl font-bold text-gray-950 sm:text-2xl">
                      Operating Hours
                    </h2>
                    <p className="mt-1 text-xs text-gray-500">
                      Office availability
                    </p>
                  </div>
                </div>

                <div className="flex-1">
                  <ul className="divide-y divide-gray-100">
                    {officeHours.map(({ day, hours }) => {
                      const isClosed = hours === "Closed";

                      return (
                        <li
                          key={day}
                          className="flex items-center justify-between gap-3 py-3 text-sm"
                        >
                          <span className="font-medium text-gray-700">
                            {day}
                          </span>

                          <span
                            className={`text-right ${
                              isClosed
                                ? "font-medium text-gray-400"
                                : "text-gray-600"
                            }`}
                          >
                            {hours}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="mt-6 rounded-xl border border-emerald-100 bg-emerald-50/80 p-4">
                  <div className="flex items-start gap-3">
                    <CalendarDaysIcon
                      aria-hidden="true"
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#0F6E57]"
                    />

                    <div>
                      <h3 className="text-sm font-bold text-emerald-950">
                        Helpline Hours
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-emerald-900">
                        Monday to Friday, 1:00 PM to 10:00 PM.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Google Maps */}
        <section
          aria-labelledby="locate-us-heading"
          className="mx-auto mt-16 w-full max-w-6xl px-4 sm:mt-20 sm:px-6 lg:mt-24 lg:px-8"
        >
          <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0F6E57]">
                Get directions
              </p>

              <h2
                id="locate-us-heading"
                className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl"
              >
                Locate <span className="text-[#0F6E57]">Us.</span>
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
                Explore the map to find Sivam Research Foundation in Tamil Nadu.
              </p>
            </div>

            <a
              href={mapSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-800 transition-colors hover:border-[#0F6E57] hover:text-[#0F6E57] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F6E57] focus-visible:ring-offset-2"
            >
              Open Google Maps
              <ArrowUpRightIcon
                aria-hidden="true"
                className="h-4 w-4"
              />
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-lg shadow-gray-900/5 sm:rounded-3xl">
            <iframe
              title="Google Maps search for Sivam Research Foundation, Tamil Nadu"
              src={mapEmbedUrl}
              className="block h-[300px] w-full border-0 sm:h-[400px] lg:h-[460px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <p className="mt-3 text-xs leading-5 text-gray-500">
            For precise directions, confirm the registered office address
            before travelling.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}