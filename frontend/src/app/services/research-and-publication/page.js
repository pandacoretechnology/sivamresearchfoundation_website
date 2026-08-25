import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  BeakerIcon,
  ChartBarIcon,
  DocumentTextIcon,
  CpuChipIcon,
  CheckCircleIcon,
  BookOpenIcon,
  EnvelopeIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "Research, Innovation & Scholarly Publication (IJMHPS) | Sivam Research Foundation",
  description: "Advancing knowledge through interdisciplinary clinical research, programme evaluation, research consultation, and our peer-reviewed journal: International Journal of Mental Health and Psychosocial Sciences (IJMHPS).",
};

export default function Research() {
  const researchPillars = [
    {
      icon: BeakerIcon,
      title: "Interdisciplinary Clinical Research",
      description: "Conducting robust psychiatric and psychosocial research, intervention development, randomized evaluations, and implementation studies that generate scientific evidence.",
    },
    {
      icon: ChartBarIcon,
      title: "Research Consultation & Mentorship",
      description: "Expert guidance in research design, proposal drafting, institutional ethics clearance, grant writing, statistical data analysis, qualitative synthesis, and scientific writing.",
    },
    {
      icon: DocumentTextIcon,
      title: "Programme Evaluation & Policy Studies",
      description: "Assessing mental health and social welfare interventions to inform evidence-based clinical practices, public health policies, and community program scaling.",
    },
    {
      icon: CpuChipIcon,
      title: "Artificial Intelligence in Mental Health",
      description: "Exploring ethical AI technologies, digital mental health screening tools, tele-health innovations, and computational models for psychosocial diagnostics.",
    },
  ];

  const focusAreas = [
    "Psychiatric Social Work",
    "Clinical & Counselling Psychology",
    "Addiction Medicine & Rehabilitation",
    "Child & Adolescent Mental Health",
    "Women's Psychosocial Well-Being",
    "Community Mental Health & Epidemiology",
    "Disability Studies & Supported Living",
    "Global Mental Health & Policy",
  ];

  const journalMissions = [
    "Promote high-quality, ethical, and impactful mental health research.",
    "Disseminate evidence-based clinical and psychosocial interventions globally.",
    "Encourage interdisciplinary collaboration across psychiatry, psychology, and social sciences.",
    "Support early-career researchers through rigorous peer review and mentorship.",
    "Contribute to mental health policy, academic education, and global health initiatives.",
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
              Scientific Inquiry & Scholarly Publishing
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Research Innovation & <br className="hidden sm:block" />
              <span className="text-[#38ef7d]">Scientific Publication</span>
            </h1>
            <p className="text-emerald-100 text-base sm:text-lg md:text-xl font-light max-w-3xl leading-relaxed mb-8">
              Advancing Mental Health Research, Clinical Practice, and Psychosocial Innovation. We bridge the gap between academic theory, clinical care, and public health policy through rigorous empirical research and scholarly publishing.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#journal"
                className="bg-white text-[#0F6E57] hover:bg-emerald-50 px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
              >
                <BookOpenIcon className="w-4 h-4" />
                <span>Explore IJMHPS Journal</span>
              </a>
              <Link
                href="/contact"
                className="bg-[#38ef7d] text-gray-900 hover:bg-[#2dd36f] px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base shadow-lg transition-all inline-flex items-center gap-2"
              >
                <span>Research Collaboration</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 2. RESEARCH DOMAINS (WITH HEROICONS) */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0F6E57]">
              Scientific Pillars
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Our Research & Innovation Wings
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mt-3">
              We generate actionable empirical evidence to improve clinical diagnosis, psychiatric social work interventions, and community healthcare outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {researchPillars.map((p, idx) => {
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

        {/* 3. OFFICIAL JOURNAL SPOTLIGHT (IJMHPS) */}
        <section id="journal" className="py-16 bg-white border-y border-gray-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-[#093529] via-[#0F6E57] to-[#124e3e] rounded-4xl text-white p-8 sm:p-14 shadow-xl">
              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3.5 py-1 rounded-full bg-[#38ef7d] text-gray-950 text-xs font-bold tracking-wider uppercase">
                    Official Publication
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-white/20 text-emerald-200 text-xs font-mono font-medium">
                    Peer-Reviewed & Open-Access
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                  International Journal of Mental Health and Psychosocial Sciences
                </h2>
                <p className="text-[#38ef7d] text-sm sm:text-base font-semibold mb-6">
                  (IJMHPS) — Publisher: Sivam Research Foundation, India
                </p>

                <p className="text-emerald-100 text-sm sm:text-base leading-relaxed mb-6">
                  The <strong className="text-white">International Journal of Mental Health and Psychosocial Sciences (IJMHPS)</strong> is an international, peer-reviewed, open-access scholarly journal dedicated to publishing high-quality research that advances knowledge in psychiatry, clinical psychology, psychiatric social work, counselling, rehabilitation, neuroscience, and psychosocial sciences.
                </p>

                <p className="text-emerald-100 text-sm sm:text-base leading-relaxed mb-8">
                  The journal provides an interdisciplinary forum for researchers, clinicians, academicians, and policymakers to bridge the gap between empirical science, clinical practice, and public mental health policy.
                </p>

                {/* Journal Vision & Mission */}
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 mb-8">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <BookOpenIcon className="w-5 h-5 text-[#38ef7d]" />
                    <span>Journal Mission & Editorial Objectives</span>
                  </h3>
                  <ul className="space-y-3 text-sm text-emerald-100">
                    {journalMissions.map((m, mIdx) => (
                      <li key={mIdx} className="flex items-start gap-3">
                        <CheckCircleIcon className="w-5 h-5 text-[#38ef7d] shrink-0" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="mailto:sivamresearchfoundation@gmail.com?subject=IJMHPS%20Manuscript%20Submission"
                    className="bg-[#38ef7d] hover:bg-[#2dd36f] text-gray-950 font-bold px-8 py-3.5 rounded-full text-sm shadow-md transition-all inline-flex items-center gap-2"
                  >
                    <EnvelopeIcon className="w-4 h-4" />
                    <span>Submit Manuscript / Inquire</span>
                  </a>
                  <a
                    href="mailto:sivamresearchfoundation@gmail.com?subject=Editorial%20Board%20Inquiry"
                    className="border border-white/40 hover:bg-white/10 text-white font-medium px-8 py-3.5 rounded-full text-sm transition-colors inline-flex items-center gap-2"
                  >
                    <span>Join Reviewer Board</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. RESEARCH FOCUS AREAS */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0F6E57]">
              Interdisciplinary Horizons
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Key Research Focus Areas
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {focusAreas.map((area, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-gray-200 shadow-2xs text-center font-semibold text-gray-800 text-sm hover:border-[#0F6E57] hover:text-[#0F6E57] transition-colors"
              >
                {area}
              </div>
            ))}
          </div>
        </section>

        {/* 5. CALL TO ACTION */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <div className="bg-white rounded-4xl p-8 sm:p-12 border border-gray-200 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Partner With Our Research Department
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto mb-8">
              We welcome joint research proposals, multi-centric clinical evaluations, academic publishing collaborations, and data science partnerships.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-[#0F6E57] hover:bg-[#0c5946] text-white px-8 py-3.5 rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition-all"
              >
                Initiate Collaboration
              </Link>
              <a
                href="mailto:sivamresearchfoundation@gmail.com"
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-3.5 rounded-full font-semibold text-sm transition-all"
              >
                Contact Editorial Office
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}