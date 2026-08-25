import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  HeartIcon,
  ChatBubbleLeftRightIcon,
  AcademicCapIcon,
  BookOpenIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "Our Services | Sivam Research Foundation",
  description: "Explore our comprehensive mental health services: Psychiatric Rehabilitation, Psychological Counselling, Academic Training & Internships, and Research & Publication.",
};

export default function ServicesHub() {
  const serviceTracks = [
    {
      href: "/services/rehabilitation-services",
      icon: HeartIcon,
      badge: "Clinical & Recovery",
      title: "Psychiatric Rehabilitation & De-Addiction",
      description: "Recovery-oriented care designed to help individuals regain independence, develop life skills, manage addiction, and reintegrate with dignity.",
      features: [
        "Psychosocial Assessment & Individual Planning",
        "Addiction Recovery & Health Studio",
        "Family Interventions & Social Skills Training",
        "Community-Based Rehabilitation (CBR)",
      ],
      cta: "Explore Rehabilitation Services",
    },
    {
      href: "/services/counselling-services",
      icon: ChatBubbleLeftRightIcon,
      badge: "Therapy & Well-Being",
      title: "Psychological Counselling & Therapy",
      description: "Safe, confidential therapy to gain clarity, overcome emotional distress, resolve interpersonal conflicts, and strengthen resilience.",
      features: [
        "Individual & Couples Counselling",
        "Child & Adolescent Mental Health",
        "CBT, IPT & Art Therapy Modalities",
        "Dedicated Helpline & Tele-Counselling",
      ],
      cta: "Explore Counselling Services",
    },
    {
      href: "/services/internship-and-training",
      icon: AcademicCapIcon,
      badge: "Education & Capacity Building",
      title: "Academic Education & Professional Training",
      description: "Hands-on clinical internships, competency-based practitioner training, university partnerships, and yoga philosophy wellness workshops.",
      features: [
        "Supervised Internships (Psychology & MSW)",
        "Continuing Professional Development (CPD)",
        "School, College & Corporate Wellness (EAP)",
        "Yoga & Indian Philosophy for Well-Being",
      ],
      cta: "Explore Training Programs",
    },
    {
      href: "/services/research-and-publication",
      icon: BookOpenIcon,
      badge: "Scholarly Publishing & Science",
      title: "Research Innovation & Publication (IJMHPS)",
      description: "Advancing mental health science through interdisciplinary clinical research, programme evaluation, and our international peer-reviewed journal.",
      features: [
        "Interdisciplinary Research & Evaluations",
        "Research Consultation & Statistical Support",
        "IJMHPS Scholarly Peer-Reviewed Journal",
        "Collaborations with Universities & Hospitals",
      ],
      cta: "Explore Research & IJMHPS",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50/50">
        {/* HERO */}
        <section className="relative bg-gradient-to-br from-[#0c4737] via-[#0F6E57] to-[#1a5b48] text-white py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden text-center">
          <div className="absolute inset-0 bg-[radial-gradient(#24E87A_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

          <div className="relative max-w-4xl mx-auto flex flex-col items-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-emerald-300 text-xs md:text-sm font-semibold tracking-wider uppercase mb-4 border border-white/20">
              Holistic Mental Health Ecosystem
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Our Core Services & <br className="hidden sm:block" />
              <span className="text-[#38ef7d]">Specialized Programs</span>
            </h1>
            <p className="text-emerald-100 text-base sm:text-lg md:text-xl font-light max-w-2xl leading-relaxed mb-4">
              We combine clinical excellence, academic education, scientific research, and community engagement to deliver holistic, evidence-based mental health services across India.
            </p>
          </div>
        </section>

        {/* SERVICE TRACKS CARDS */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceTracks.map((track, idx) => {
              const IconComponent = track.icon;
              return (
                <div
                  key={idx}
                  className="group bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-50 text-[#0F6E57] text-xs font-bold tracking-wider uppercase">
                        {track.badge}
                      </span>
                      <div className="w-11 h-11 rounded-xl bg-emerald-50 group-hover:bg-[#0F6E57] text-[#0F6E57] group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-2xs">
                        <IconComponent className="w-5 h-5 stroke-[1.75]" />
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#0F6E57] transition-colors">
                      {track.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {track.description}
                    </p>

                    <div className="space-y-2.5 mb-8">
                      {track.features.map((f, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700">
                          <CheckCircleIcon className="w-4 h-4 text-[#0F6E57] shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={track.href}
                    className="inline-flex items-center justify-center gap-2 bg-[#0F6E57] hover:bg-[#0c5946] text-white font-semibold py-3 px-6 rounded-full text-sm shadow-sm hover:shadow-md transition-all"
                  >
                    <span>{track.cta}</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#0c4737] to-[#0F6E57] rounded-4xl text-white p-8 sm:p-14 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Need Help Deciding Which Service Is Right for You?
            </h2>
            <p className="text-emerald-100 text-sm sm:text-base max-w-xl mx-auto mb-8">
              Our clinical and admissions team is ready to guide you or your organization through the right support options.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-[#38ef7d] hover:bg-[#2dd36f] text-gray-950 font-bold px-8 py-3.5 rounded-full text-sm shadow-md transition-all inline-flex items-center gap-2"
              >
                <span>Contact Us Today</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <a
                href="tel:+919952941614"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-full text-sm border border-white/20 transition-all inline-flex items-center gap-2"
              >
                <PhoneIcon className="w-4 h-4" />
                <span>Call (+91) 9952 9416 14</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
