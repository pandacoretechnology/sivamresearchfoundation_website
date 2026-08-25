import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  ClipboardDocumentCheckIcon,
  IdentificationIcon,
  UserGroupIcon,
  ChatBubbleBottomCenterTextIcon,
  UsersIcon,
  SparklesIcon,
  HomeIcon,
  BriefcaseIcon,
  LightBulbIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  HeartIcon,
  CheckCircleIcon,
  PhoneIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "Psychiatric Rehabilitation & De-Addiction Services | Sivam Research Foundation",
  description: "Comprehensive psychosocial rehabilitation, addiction recovery, and personalized care pathways designed to rebuild lives, restore independence, and empower recovery.",
};

export default function Rehabilitation() {
  const rehabilitationServices = [
    {
      icon: ClipboardDocumentCheckIcon,
      title: "Comprehensive Psychosocial Assessment",
      description: "Detailed assessments of psychological, social, occupational, educational, family, and functional needs to build personalized rehabilitation plans.",
    },
    {
      icon: IdentificationIcon,
      title: "Individual Rehabilitation Planning",
      description: "Customized recovery roadmap focusing on recovery goals, independent living, emotional balance, vocational growth, and community participation.",
    },
    {
      icon: UserGroupIcon,
      title: "Family Assessment & Interventions",
      description: "Structured family counselling, caregiver support, psychoeducation, and relapse prevention strategies to reduce caregiver burden and foster resilience.",
    },
    {
      icon: ChatBubbleBottomCenterTextIcon,
      title: "Individual Counselling & Psychotherapy",
      description: "Evidence-based therapy helping individuals improve emotional regulation, coping mechanisms, self-esteem, insight, treatment adherence, and motivation.",
    },
    {
      icon: UsersIcon,
      title: "Group Therapy & Peer Interventions",
      description: "Structured therapeutic group sessions promoting peer support, interpersonal relationships, emotional expression, and community reintegration.",
    },
    {
      icon: SparklesIcon,
      title: "Social Skills Training",
      description: "Targeted training in communication, relationship building, conflict resolution, assertiveness, and confident social functioning.",
    },
    {
      icon: HomeIcon,
      title: "Activities of Daily Living (ADL)",
      description: "Practical life skills training in personal hygiene, self-care, budgeting, cooking, medication compliance, and independent living routines.",
    },
    {
      icon: BriefcaseIcon,
      title: "Vocational & Employment Support",
      description: "Career assessment, pre-vocational training, job readiness skill-building, supported employment, and workplace adjustment guidance.",
    },
    {
      icon: LightBulbIcon,
      title: "Cognitive & Recreational Therapy",
      description: "Therapeutic art, music, yoga, mindfulness, and cognitive stimulation activities to enhance mental sharpness and emotional well-being.",
    },
    {
      icon: GlobeAltIcon,
      title: "Community-Based Rehabilitation (CBR)",
      description: "Facilitating community reintegration through home visits, community outreach, social inclusion, and linkage to government welfare services.",
    },
    {
      icon: ShieldCheckIcon,
      title: "Medication Adherence & Relapse Prevention",
      description: "Psychoeducation on medication adherence, early warning symptom identification, healthy lifestyle habits, and long-term recovery plans.",
    },
    {
      icon: HeartIcon,
      title: "Supported Living & Recovery Planning",
      description: "Assisting individuals in developing self-reliance, community adjustment, recovery milestones, and continuous psychosocial support.",
    },
  ];

  const conditions = [
    "Schizophrenia & Psychotic Disorders",
    "Bipolar Disorder",
    "Major Depressive Disorder",
    "Anxiety & Panic Disorders",
    "Obsessive-Compulsive Disorder (OCD)",
    "Substance Use & Alcohol Addiction",
    "Dual Diagnosis (Mental Illness + Substance Use)",
    "Personality Disorders",
    "Autism Spectrum Disorder",
    "Intellectual & Developmental Disabilities",
    "Attention Deficit Hyperactivity Disorder (ADHD)",
    "Dementia & Neurocognitive Disorders",
    "Trauma & Stress-Related Disorders",
    "Severe Mental Illness Requiring Long-term Care",
  ];

  const pillars = [
    { title: "Recovery-Oriented", desc: "Focusing on personal growth, hope, and meaningful life milestones." },
    { title: "Person-Centred", desc: "Tailoring care pathways to the unique strengths and goals of the individual." },
    { title: "Evidence-Based", desc: "Integrating scientific therapies and standardized clinical assessments." },
    { title: "Family-Centred", desc: "Engaging and empowering family members through education and guidance." },
    { title: "Community Integration", desc: "Bridging the transition back to work, social networks, and community living." },
    { title: "Multidisciplinary", desc: "Psychiatrists, clinical psychologists, psychiatric social workers, and therapists collaborating seamlessly." },
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
              Specialized Psychiatric Care
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Psychiatric Rehabilitation & <br className="hidden sm:block" />
              <span className="text-[#38ef7d]">De-Addiction Services</span>
            </h1>
            <p className="text-emerald-100 text-base sm:text-lg md:text-xl font-light max-w-3xl leading-relaxed mb-8">
              Rebuilding Lives. Restoring Independence. Empowering Recovery. We provide compassionate, recovery-oriented care extending beyond symptom management to help individuals regain self-reliance and thrive.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-[#0F6E57] hover:bg-emerald-50 px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
              >
                <span>Schedule Consultation</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/919952941614"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#38ef7d] text-gray-900 hover:bg-[#2dd36f] px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base shadow-lg transition-all inline-flex items-center gap-2"
              >
                <span>WhatsApp Helpline</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* 2. CORE REHABILITATION SERVICES (GRID WITH HEROICONS) */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0F6E57]">
              Comprehensive Care Offerings
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Our Rehabilitation Services
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mt-3">
              Delivered by our multidisciplinary team of psychiatrists, clinical psychologists, psychiatric social workers, and occupational therapists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {rehabilitationServices.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={idx}
                  className="group bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className="w-13 h-13 rounded-2xl bg-emerald-50 group-hover:bg-[#0F6E57] text-[#0F6E57] group-hover:text-white flex items-center justify-center mb-5 shrink-0 transition-colors duration-300 shadow-2xs">
                    <IconComponent className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#0F6E57] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. DE-ADDICTION RECOVERY HIGHLIGHT */}
        <section className="py-16 bg-white border-y border-gray-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-[#093529] to-[#0F6E57] rounded-4xl text-white p-8 md:p-14 shadow-xl">
              <div className="max-w-3xl">
                <span className="inline-block px-3.5 py-1 rounded-full bg-white/20 text-emerald-300 text-xs font-bold tracking-wider uppercase mb-4">
                  Medical & Psychological Care
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                  Addiction Recovery & De-Addiction Unit
                </h2>
                <p className="text-emerald-100 text-sm sm:text-base leading-relaxed mb-6">
                  At Sivam Research Foundation, we provide comprehensive medical, psychological, and emotional support for alcohol and substance use disorders. We are fully equipped to assess and manage all levels of de-addiction-related complications, including delirium tremens, alcoholic hallucinosis, and withdrawal management.
                </p>
                <p className="text-emerald-100 text-sm sm:text-base leading-relaxed mb-8">
                  Our holistic recovery model features health studios staffed by in-house physiotherapists, yoga therapists, and fitness specialists, alongside a psychiatric ICU setting for safe stabilization in a comfortable, protected environment.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-[#38ef7d] hover:bg-[#2dd36f] text-gray-950 font-semibold px-6 py-3 rounded-full text-sm shadow-md transition-colors inline-flex items-center gap-2"
                  >
                    <span>Inquire About De-Addiction Care</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                  <a
                    href="tel:+919952941614"
                    className="border border-white/40 hover:bg-white/10 text-white font-medium px-6 py-3 rounded-full text-sm transition-colors inline-flex items-center gap-2"
                  >
                    <PhoneIcon className="w-4 h-4" />
                    <span>Emergency Call (+91) 9952 9416 14</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. CONDITIONS SUPPORTED */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0F6E57]">
              Clinical Scope
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Conditions We Support
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto mt-2">
              Our multidisciplinary team provides personalized rehabilitation across a spectrum of mental health conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {conditions.map((condition, idx) => (
              <div
                key={idx}
                className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200/80 shadow-2xs flex items-center gap-3 hover:border-[#0F6E57] hover:shadow-md transition-all"
              >
                <CheckCircleIcon className="w-5 h-5 text-[#0F6E57] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-gray-800">
                  {condition}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 5. OUR REHABILITATION APPROACH */}
        <section className="py-16 bg-emerald-950 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                Core Philosophy
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                Our Rehabilitation Model
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-emerald-400/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-400/20 text-[#38ef7d] flex items-center justify-center font-bold text-sm mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                  <p className="text-emerald-100/80 text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. CALL TO ACTION */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <div className="bg-white rounded-4xl p-8 sm:p-12 border border-gray-200 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Begin Your Pathway to Recovery
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto mb-8">
              Reach out to our clinical team to schedule a confidential psychosocial assessment or discuss rehabilitation options for yourself or a loved one.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-[#0F6E57] hover:bg-[#0c5946] text-white px-8 py-3.5 rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition-all"
              >
                Contact Admissions
              </Link>
              <a
                href="https://wa.me/919952941614"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-3.5 rounded-full font-semibold text-sm transition-all"
              >
                Connect on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
