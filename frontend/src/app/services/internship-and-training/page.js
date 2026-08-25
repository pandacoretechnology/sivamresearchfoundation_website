import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  AcademicCapIcon,
  BookOpenIcon,
  DocumentTextIcon,
  ClipboardDocumentCheckIcon,
  BuildingLibraryIcon,
  BriefcaseIcon,
  SparklesIcon,
  SunIcon,
  HeartIcon,
  LightBulbIcon,
  EnvelopeIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "Academic Education, Internship & Professional Training | Sivam Research Foundation",
  description: "High-quality academic education, supervised clinical internships, professional competency training, and workshops for students, mental health practitioners, and organizations.",
};

export default function Internship() {
  const trainingPrograms = [
    {
      icon: AcademicCapIcon,
      title: "Student Internships & Supervised Fieldwork",
      description: "Hands-on clinical exposure, case formulation, psychiatric social work training, and supervised practice for undergraduate and postgraduate students in Psychology, MSW, and Counselling.",
      audience: "Psychology & MSW Students",
    },
    {
      icon: BookOpenIcon,
      title: "Competency-Based Professional Training",
      description: "Structured skill-building modules for mental health professionals, counsellors, social workers, nurses, teachers, and NGO staff on evidence-based psychosocial interventions.",
      audience: "Clinicians, Educators & NGO Personnel",
    },
    {
      icon: DocumentTextIcon,
      title: "Academic Courses & Guest Lectures",
      description: "Certificate courses, curriculum development, academic mentoring, and educational partnerships with premier universities and higher education institutions.",
      audience: "Academic Institutions & Colleges",
    },
    {
      icon: ClipboardDocumentCheckIcon,
      title: "Workshops & Capacity Building (CPD)",
      description: "Continuing Professional Development (CPD) webinars, clinical masterclasses, and conferences focusing on ethical practice, psychodiagnostics, and advanced therapeutic interventions.",
      audience: "Practicing Therapists & Healthcare Staff",
    },
    {
      icon: BuildingLibraryIcon,
      title: "School & College Wellness Programs",
      description: "Life skills education, Social Emotional Learning (SEL), examination anxiety management, suicide prevention, and teacher sensitisation initiatives.",
      audience: "Schools, Colleges & Universities",
    },
    {
      icon: BriefcaseIcon,
      title: "Corporate & Workplace Wellness (EAP)",
      description: "Tailored workplace mental health initiatives, stress reduction workshops, work-life harmony, burnout prevention, and Employee Assistance Programs.",
      audience: "Corporate Teams & Organizations",
    },
  ];

  const yogaPhilosophy = [
    {
      icon: SparklesIcon,
      title: "Yoga for Mental Health",
      desc: "Structured yogic postures and movement sessions designed to enhance emotional regulation, reduce psychological stress, and improve focus.",
    },
    {
      icon: SunIcon,
      title: "Meditation & Mindfulness",
      desc: "Guided mindfulness techniques cultivating self-awareness, present-moment focus, and emotional resilience.",
    },
    {
      icon: HeartIcon,
      title: "Pranayama (Breathing Techniques)",
      desc: "Scientific breathing exercises that calm the autonomic nervous system and promote physical and mental relaxation.",
    },
    {
      icon: LightBulbIcon,
      title: "Indian Philosophy for Well-Being",
      desc: "Interactive workshops drawing insights from the Bhagavad Gita, Upanishads, and Patanjali's Yoga Sutras for purposeful, ethical living.",
    },
  ];

  const focusDisciplines = [
    "Psychiatric Social Work",
    "Clinical Psychology",
    "Counselling Psychology",
    "Addiction & Psychosocial Rehabilitation",
    "Community Mental Health",
    "Child & Adolescent Mental Health",
    "Women's Mental Health",
    "Life Skills & Emotional Well-Being",
    "Artificial Intelligence in Mental Health",
    "Programme Evaluation & Policy Research",
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
              Education, Training & Capacity Building
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Academic Education, Internship & <br className="hidden sm:block" />
              <span className="text-[#38ef7d]">Professional Training</span>
            </h1>
            <p className="text-emerald-100 text-base sm:text-lg md:text-xl font-light max-w-3xl leading-relaxed mb-8">
              Shaping Future Professionals Through Education, Practical Experience, and Evidence-Based Training. We empower students, clinicians, educators, and organizations to address emerging mental health and psychosocial challenges.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-[#0F6E57] hover:bg-emerald-50 px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
              >
                <span>Apply for Internship / Training</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <a
                href="mailto:sivamresearchfoundation@gmail.com"
                className="bg-[#38ef7d] text-gray-900 hover:bg-[#2dd36f] px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base shadow-lg transition-all inline-flex items-center gap-2"
              >
                <EnvelopeIcon className="w-4 h-4" />
                <span>Institutional Collaborations</span>
              </a>
            </div>
          </div>
        </section>

        {/* 2. OVERVIEW & MISSION */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1f7456] mb-4">
              Bridging Academic Theory with Clinical Excellence
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
              At Sivam Research Foundation, we integrate academic learning with hands-on clinical exposure and scientific inquiry. Our programs foster continuous learning and professional competence in mental health, psychiatric social work, clinical psychology, and community development.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              We collaborate with premier universities, hospitals, research institutes, and NGOs across India to provide accredited internship placements, structured fieldwork supervision, and certified training.
            </p>
          </div>
        </section>

        {/* 3. TRAINING & INTERNSHIP PROGRAMS (WITH HEROICONS) */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0F6E57]">
              Our Offerings
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Education & Training Pathways
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {trainingPrograms.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="group bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-13 h-13 rounded-2xl bg-emerald-50 group-hover:bg-[#0F6E57] text-[#0F6E57] group-hover:text-white flex items-center justify-center mb-5 shrink-0 transition-colors duration-300 shadow-2xs">
                      <IconComponent className="w-6 h-6 stroke-[1.75]" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#0F6E57] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full">
                      Target: {item.audience}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. YOGA & INDIAN PHILOSOPHY INTEGRATION (WITH HEROICONS) */}
        <section className="py-16 bg-white border-y border-gray-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0F6E57]">
                Ancient Wisdom Meets Modern Science
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Yoga & Indian Philosophy for Holistic Well-Being
              </h2>
              <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mt-2">
                Integrating traditional yogic science, meditation, and philosophical principles with evidence-based mental health care.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {yogaPhilosophy.map((y, idx) => {
                const IconComponent = y.icon;
                return (
                  <div key={idx} className="bg-gray-50 rounded-3xl p-6 border border-gray-100 flex flex-col">
                    <div className="w-11 h-11 rounded-xl bg-emerald-100 text-[#0F6E57] flex items-center justify-center mb-4 shrink-0">
                      <IconComponent className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">{y.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{y.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. FOCUS DISCIPLINES */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0F6E57]">
              Academic Scope
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Core Training & Focus Disciplines
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {focusDisciplines.map((d, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full bg-white border border-gray-200 shadow-2xs text-xs sm:text-sm font-semibold text-gray-800 hover:border-[#0F6E57] hover:text-[#0F6E57] transition-colors"
              >
                {d}
              </span>
            ))}
          </div>
        </section>

        {/* 6. CALL TO ACTION */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#0c4737] to-[#0F6E57] rounded-4xl text-white p-8 sm:p-14 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Advance Your Career in Mental Health
            </h2>
            <p className="text-emerald-100 text-sm sm:text-base max-w-xl mx-auto mb-8">
              Inquire about upcoming internship batches, custom institutional workshops, certificate programs, or university collaborations.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-[#38ef7d] hover:bg-[#2dd36f] text-gray-950 font-bold px-8 py-3.5 rounded-full text-sm shadow-md transition-all inline-flex items-center gap-2"
              >
                <span>Inquire for Internships</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <a
                href="mailto:sivamresearchfoundation@gmail.com"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-full text-sm border border-white/20 transition-all inline-flex items-center gap-2"
              >
                <EnvelopeIcon className="w-4 h-4" />
                <span>Email Department</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}