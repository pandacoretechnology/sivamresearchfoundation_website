import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GallerySection from "../../about/section/GallerySection";
import Link from "next/link";
import {
  HeartIcon,
  SparklesIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  GiftIcon,
  CheckCircleIcon,
  EnvelopeIcon,
  ArrowRightIcon,
  SunIcon,
  HandRaisedIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "Food for All Initiative | Sivam Research Foundation",
  description: "Nourishing communities with compassion and dignity through nutritional support, community kitchen drives, zero hunger initiatives, and sustainable food security programs.",
};

export default function FoodForAll() {
  const foodPillars = [
    {
      icon: HeartIcon,
      title: "Annadan & Community Meals",
      description: "Regular distribution of wholesome, hygienic, and nutritious cooked meals to underprivileged individuals, daily wAGE earners, and families in need.",
    },
    {
      icon: ShieldCheckIcon,
      title: "Nutritional Support for Vulnerable Groups",
      description: "Targeted food security packages and dietary supplements designed specifically for growing children, pregnant women, and older adults.",
    },
    {
      icon: SparklesIcon,
      title: "Zero Hunger & Food Waste Reduction",
      description: "Partnering with local institutions, event organizers, and community donors to collect surplus edible food and redirect it safely to hungry populations.",
    },
    {
      icon: SunIcon,
      title: "Community Kitchen Drives",
      description: "Operating community kitchen initiatives that foster social solidarity, community bonding, and equitable access to daily nutrition.",
    },
  ];

  const initiatives = [
    "Emergency Food Relief for Low-Income Families",
    "Weekly Nutritional Supply Distribution for Older Adults",
    "School Nutrition Support & Healthy Snack Programs",
    "Festive & Community Feast Gatherings (Annadan)",
    "Awareness on Balanced Diet & Hygiene Practices",
    "Sustainable Food Redistribution Logistics",
  ];

  const impactMetrics = [
    { number: "10,000+", label: "Meals Served with Dignity" },
    { number: "50+", label: "Community Food Drives" },
    { number: "1,200+", label: "Families Supported Annually" },
    { number: "100%", label: "Committed to Zero Hunger" },
  ];

  const waysToHelp = [
    {
      title: "Sponsor a Meal Drive",
      description: "Contribute towards raw materials or cooked meal boxes for an entire community or special occasion.",
      icon: GiftIcon,
    },
    {
      title: "Volunteer on Ground",
      description: "Join our active field team in packing, sorting, and distributing food packages with love and respect.",
      icon: HandRaisedIcon,
    },
    {
      title: "Partner as a Donor",
      description: "Establish recurring corporate or institutional contributions to sustain our weekly hunger relief operations.",
      icon: UserGroupIcon,
    },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white/90">
        {/* 1. HERO BANNER */}
        <section className="relative bg-gradient-to-br from-[#0c4737] via-[#0F6E57] to-[#1a5b48] text-white py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#24E87A_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

          <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-emerald-300 text-xs md:text-sm font-semibold tracking-wider uppercase mb-4 border border-white/20">
              Community Welfare & Social Impact
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Food for All: <br className="hidden sm:block" />
              <span className="text-[#38ef7d]">Nourishing Communities with Compassion and Dignity</span>
            </h1>
            <p className="text-emerald-100 text-base sm:text-lg md:text-xl font-light max-w-3xl leading-relaxed mb-8">
              At Sivam Research Foundation, we believe access to wholesome nutrition is a fundamental human right. Our &quot;Food for All&quot; initiative bridges hunger gaps through systematic food security programs, community meal drives, and compassionate outreach.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#pillars"
                className="bg-white text-[#0F6E57] hover:bg-emerald-50 px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
              >
                <HeartIcon className="w-4 h-4" />
                <span>Explore Our Drives</span>
              </a>
              <Link
                href="/contact"
                className="bg-[#38ef7d] text-gray-900 hover:bg-[#2dd36f] px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base shadow-lg transition-all inline-flex items-center gap-2"
              >
                <span>Sponsor or Volunteer</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 2. IMPACT METRICS BAR */}
        <section className="py-12 bg-emerald-50/70 border-b border-emerald-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {impactMetrics.map((metric, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl border border-emerald-100 shadow-2xs">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#0F6E57] mb-1">
                    {metric.number}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-gray-600">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. FOOD PILLARS GRID */}
        <section id="pillars" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0F6E57]">
              Our Core Mission
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Community Food Security & Nutrition Drives
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mt-3">
              Combating hunger and malnutrition through structured, respectful, and sustainable distribution networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {foodPillars.map((p, idx) => {
              const IconComponent = p.icon;
              return (
                <div
                  key={idx}
                  className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row gap-5 items-start"
                >
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 group-hover:bg-[#0F6E57] text-[#0F6E57] group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-300 shadow-2xs">
                    <IconComponent className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#0F6E57] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        { /* Gallery */ }

        <GallerySection />

        {/* 4. INITIATIVES SPOTLIGHT CARD */}
        <section className="py-16 bg-white border-y border-gray-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-[#093529] via-[#0F6E57] to-[#124e3e] rounded-4xl text-white p-8 sm:p-14 shadow-xl">
              <div className="max-w-4xl">
                <span className="px-3.5 py-1 rounded-full bg-[#38ef7d] text-gray-950 text-xs font-bold tracking-wider uppercase mb-4 inline-block">
                  On-Ground Action
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  Zero Hunger & Sustainable Relief Programs
                </h2>
                <p className="text-emerald-100 text-sm sm:text-base leading-relaxed mb-8">
                  Every food packet we deliver embodies our core value of empathy, ensuring that individuals experience both physical nourishment and social dignity.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20">
                  {initiatives.map((init, iIdx) => (
                    <div key={iIdx} className="flex items-start gap-3">
                      <CheckCircleIcon className="w-5 h-5 text-[#38ef7d] shrink-0 mt-0.5" />
                      <span className="text-sm text-emerald-100 font-medium">{init}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. HOW YOU CAN HELP */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0F6E57]">
              Get Involved
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              How You Can Support Food for All
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mt-3">
              Your contribution goes a long way in putting warm meals on tables and smiles on faces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {waysToHelp.map((help, hIdx) => {
              const HelpIcon = help.icon;
              return (
                <div
                  key={hIdx}
                  className="bg-white rounded-3xl p-8 border border-gray-200 shadow-md flex flex-col items-center text-center hover:border-[#0F6E57] transition-all"
                >
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-[#0F6E57] flex items-center justify-center mb-6 shadow-xs">
                    <HelpIcon className="w-8 h-8 stroke-[1.75]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{help.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{help.description}</p>
                  <Link
                    href="/contact"
                    className="mt-auto inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F6E57] hover:text-[#0c5946]"
                  >
                    <span>Connect Now</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        {/* 6. CALL TO ACTION */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <div className="bg-gradient-to-r from-emerald-50 via-white to-teal-50 rounded-4xl p-8 sm:p-12 border border-emerald-100 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Join Hands to Eradicate Hunger Together
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto mb-8">
              Whether you wish to sponsor a meal drive or volunteer your time for our upcoming distribution events, we welcome your noble partnership.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-[#0F6E57] hover:bg-[#0c5946] text-white px-8 py-3.5 rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition-all"
              >
                Sponsor or Volunteer
              </Link>
              <a
                href="mailto:support@sivamresearchfoundation.org?subject=Food%20for%20All%20Inquiry"
                className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 px-8 py-3.5 rounded-full font-semibold text-sm shadow-xs transition-all inline-flex items-center gap-2"
              >
                <EnvelopeIcon className="w-4 h-4 text-[#0F6E57]" />
                <span>Contact Foundation Team</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}