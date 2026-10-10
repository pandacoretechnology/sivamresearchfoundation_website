import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  SparklesIcon,
  HeartIcon,
  SunIcon,
  BookOpenIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  UserGroupIcon,
  CheckCircleIcon,
  EnvelopeIcon,
  ArrowRightIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "Yoga & Indian Philosophy for Holistic Mental Well-being | Sivam Research Foundation",
  description: "Integrating ancient wisdom, yoga, meditation, Pranayama, and Indian philosophy with evidence-based mental health approaches to foster resilience, inner peace, and sustainable well-being.",
};

export default function Yoga() {
  const yogaServices = [
    {
      icon: SparklesIcon,
      title: "Yoga for Mental Health",
      description: "Structured yoga sessions designed to improve emotional regulation, reduce stress, enhance concentration, and support psychological well-being.",
    },
    {
      icon: HeartIcon,
      title: "Meditation and Mindfulness",
      description: "Guided meditation and mindfulness practices that cultivate self-awareness, emotional balance, relaxation, and resilience while reducing anxiety and psychological distress.",
    },
    {
      icon: SunIcon,
      title: "Pranayama (Breathing Techniques)",
      description: "Scientific breathing exercises that improve emotional regulation, reduce stress, promote relaxation, and enhance physical and mental health.",
    },
    {
      icon: BookOpenIcon,
      title: "Indian Philosophy for Well-being",
      description: "Workshops based on the teachings of the Bhagavad Gita, Upanishads, Patanjali's Yoga Sutras, and other Indian philosophical traditions, focusing on self-awareness, values, purpose, emotional balance, and ethical living.",
    },
    {
      icon: ShieldCheckIcon,
      title: "Stress Management and Relaxation",
      description: "Yoga-based stress reduction programs incorporating relaxation techniques, guided imagery, breathing exercises, and meditation for individuals, students, and professionals.",
    },
    {
      icon: AcademicCapIcon,
      title: "Student Wellness Programs",
      description: "Specialized sessions for school and college students to improve concentration, emotional intelligence, resilience, examination confidence, and healthy lifestyle practices.",
    },
    {
      icon: BriefcaseIcon,
      title: "Workplace Wellness Programs",
      description: "Corporate wellness initiatives focusing on stress management, work-life balance, mindfulness, resilience, and employee well-being through yoga and meditation.",
    },
    {
      icon: UserGroupIcon,
      title: "Healthy Ageing Programs",
      description: "Yoga and mindfulness sessions designed for older adults to enhance mobility, cognitive health, emotional well-being, relaxation, and healthy ageing.",
    },
  ];

  const benefits = [
    "Reduces stress, anxiety, and depression",
    "Improves emotional regulation and resilience",
    "Enhances concentration, memory, and cognitive functioning",
    "Promotes better sleep and relaxation",
    "Improves physical flexibility, balance, and overall fitness",
    "Strengthens self-awareness and mindfulness",
    "Encourages healthy relationships and positive coping",
    "Supports recovery from mental health challenges",
    "Enhances overall quality of life and inner well-being",
  ];

  const approaches = [
    "Evidence-informed and holistic",
    "Inclusive and culturally sensitive",
    "Integrated with mental health care",
    "Suitable for all age groups",
    "Focused on prevention, wellness, and recovery",
    "Delivered by qualified professionals and certified yoga practitioners",
  ];

  const targetAudiences = [
    "Children and Adolescents",
    "College Students",
    "Working Professionals",
    "Women",
    "Older Adults",
    "Individuals experiencing stress, anxiety, or depression",
    "Caregivers and Families",
    "Persons recovering from mental health conditions",
    "Community Groups and Organizations",
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
              Ancient Wisdom & Modern Mental Health
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Integrating Ancient Wisdom for <br className="hidden sm:block" />
              <span className="text-[#38ef7d]">Holistic Mental Well-being</span>
            </h1>
            <p className="text-emerald-100 text-base sm:text-lg md:text-xl font-light max-w-3xl leading-relaxed mb-8">
              At Sivam Research Foundation, we recognize the profound role of Yoga and Indian Philosophy in promoting mental, emotional, physical, and spiritual well-being. Rooted in India&apos;s rich cultural heritage, our programs integrate traditional yogic practices with evidence-based mental health approaches.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#services"
                className="bg-white text-[#0F6E57] hover:bg-emerald-50 px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
              >
                <SparklesIcon className="w-4 h-4" />
                <span>Explore Our Services</span>
              </a>
              <Link
                href="/contact"
                className="bg-[#38ef7d] text-gray-900 hover:bg-[#2dd36f] px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base shadow-lg transition-all inline-flex items-center gap-2"
              >
                <span>Join Wellness Programs</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 2. PHILOSOPHY INTRO */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <div className="bg-emerald-50/60 border border-emerald-100 rounded-4xl p-8 sm:p-12 shadow-xs">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              A Harmonious Blend of Tradition & Science
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Our holistic approach combines yoga, meditation, mindfulness, breathing techniques (Pranayama), relaxation practices, and philosophical principles to help individuals achieve balance, inner peace, and sustainable well-being.
            </p>
          </div>
        </section>

        {/* 3. YOGA & PHILOSOPHY SERVICES (8 SERVICES GRID) */}
        <section id="services" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0F6E57]">
              Offerings & Practices
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Our Yoga and Indian Philosophy Services
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mt-3">
              Tailored modules designed to cultivate mental resilience, emotional mastery, and physical vitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {yogaServices.map((service, idx) => {
              const IconComponent = service.icon;
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
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. BENEFITS SPOTLIGHT CARD */}
        <section className="py-16 bg-white border-y border-gray-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-[#093529] via-[#0F6E57] to-[#124e3e] rounded-4xl text-white p-8 sm:p-14 shadow-xl">
              <div className="max-w-4xl">
                <span className="px-3.5 py-1 rounded-full bg-[#38ef7d] text-gray-950 text-xs font-bold tracking-wider uppercase mb-4 inline-block">
                  Transformative Outcomes
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  Benefits of Yoga and Indian Philosophy
                </h2>
                <p className="text-emerald-100 text-sm sm:text-base leading-relaxed mb-8">
                  Regular engagement with our integrative wellness programs fosters deep psychological healing and sustained vitality across dimensions.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20">
                  {benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3">
                      <CheckCircleIcon className="w-5 h-5 text-[#38ef7d] shrink-0 mt-0.5" />
                      <span className="text-sm text-emerald-100 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. OUR APPROACH & WHO CAN BENEFIT */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Our Approach */}
            <div className="bg-white rounded-4xl p-8 sm:p-10 border border-gray-200 shadow-md flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#0F6E57] mb-2 block">
                  Methodology
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  Our Approach
                </h2>
                <p className="text-gray-600 text-sm mb-6">
                  At Sivam Research Foundation, our Yoga and Indian Philosophy programs are crafted with rigorous scientific standards and profound respect for tradition:
                </p>
                <ul className="space-y-3.5">
                  {approaches.map((app, aIdx) => (
                    <li key={aIdx} className="flex items-center gap-3 text-sm text-gray-800 font-medium">
                      <span className="w-2 h-2 rounded-full bg-[#0F6E57] shrink-0" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Who Can Benefit */}
            <div className="bg-white rounded-4xl p-8 sm:p-10 border border-gray-200 shadow-md flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#0F6E57] mb-2 block">
                  Inclusivity
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  Who Can Benefit?
                </h2>
                <p className="text-gray-600 text-sm mb-6">
                  Our programs are designed to accommodate diverse age brackets, life stages, and clinical requirements:
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {targetAudiences.map((aud, auIdx) => (
                    <span
                      key={auIdx}
                      className="bg-emerald-50/80 text-[#0F6E57] border border-emerald-100 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold"
                    >
                      {aud}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. CALL TO ACTION */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <div className="bg-gradient-to-r from-emerald-50 via-white to-teal-50 rounded-4xl p-8 sm:p-12 border border-emerald-100 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Begin Your Journey to Inner Peace & Well-being
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto mb-8">
              Connect with our certified practitioners and mental health specialists to participate in our upcoming yoga, meditation, and philosophical wellness sessions.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-[#0F6E57] hover:bg-[#0c5946] text-white px-8 py-3.5 rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition-all"
              >
                Enroll in Programs
              </Link>
              <a
                href="mailto:support@sivamresearchfoundation.org?subject=Yoga%20and%20Philosophy%20Inquiry"
                className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 px-8 py-3.5 rounded-full font-semibold text-sm shadow-xs transition-all inline-flex items-center gap-2"
              >
                <EnvelopeIcon className="w-4 h-4 text-[#0F6E57]" />
                <span>Contact Wellness Desk</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}