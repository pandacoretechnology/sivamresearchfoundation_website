import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  UserIcon,
  UserGroupIcon,
  AcademicCapIcon,
  HeartIcon,
  PaintBrushIcon,
  VideoCameraIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  SparklesIcon,
  EnvelopeIcon,
  PhoneIcon,
  ClockIcon,
  CalendarDaysIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "Psychological Counselling & Therapy Services | Sivam Research Foundation",
  description: "Evidence-based individual, family, couples, child, and adolescent psychological counselling. Find clarity, overcome emotional distress, and build resilience with expert guidance.",
};

export default function Counselling() {
  const counsellingOfferings = [
    {
      icon: UserIcon,
      title: "Individual Psychological Counselling",
      description: "One-on-one confidential sessions focusing on self-awareness, emotional regulation, anxiety, depression, stress management, self-esteem, and personal transitions.",
      tags: ["Emotional Balance", "Self-Esteem", "Life Transitions"],
    },
    {
      icon: UserGroupIcon,
      title: "Family & Couples Therapy",
      description: "Facilitating communication enhancement, conflict resolution, relationship strengthening, and providing structured psychoeducation and caregiver support.",
      tags: ["Relationship Dynamics", "Caregiver Support", "Conflict Resolution"],
    },
    {
      icon: AcademicCapIcon,
      title: "Child & Adolescent Mental Health",
      description: "Specialized support for children and youth dealing with emotional, behavioural, academic, and interpersonal challenges, examination stress, and social adjustment.",
      tags: ["Academic Stress", "Behavioural Guidance", "Youth Resilience"],
    },
    {
      icon: HeartIcon,
      title: "Clinical Psychotherapy & CBT",
      description: "Structured psychotherapy combining Cognitive Behaviour Therapy (CBT), Interpersonal Psychotherapy (IPT), and Trauma-Informed Care to address mood and anxiety disorders.",
      tags: ["CBT Techniques", "Trauma-Informed", "IPT Modalities"],
    },
    {
      icon: PaintBrushIcon,
      title: "Art & Expressive Therapy",
      description: "Creative therapeutic approaches utilizing art and expressive mediums to support non-verbal emotional processing, insight, and self-discovery.",
      tags: ["Creative Processing", "Mindfulness", "Insight Building"],
    },
    {
      icon: VideoCameraIcon,
      title: "Online Counselling & Tele-Mental Health",
      description: "Secure, confidential, and accessible remote tele-counselling sessions for individuals and families across India and internationally.",
      tags: ["Tele-Mental Health", "Confidential & Secure", "Flexible Timings"],
    },
  ];

  const benefits = [
    {
      icon: LightBulbIcon,
      title: "Gain Emotional Clarity",
      desc: "Understand your feelings, thoughts, and behavioural patterns in a safe, non-judgmental environment.",
    },
    {
      icon: ShieldCheckIcon,
      title: "Strengthen Coping Skills",
      desc: "Equip yourself with practical, evidence-based tools to navigate life stresses and interpersonal challenges.",
    },
    {
      icon: HeartIcon,
      title: "Heal & Rebuild Relationships",
      desc: "Foster healthier communication, assertiveness, empathy, and boundary-setting with loved ones.",
    },
    {
      icon: SparklesIcon,
      title: "Personal Growth & Empowerment",
      desc: "Discover internal capacities to help yourself experience greater wellness, autonomy, and fulfillment.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white/90">
        {/* 1. HERO BANNER */}
        <section className="relative bg-gradient-to-br from-[#0c4737] via-[#0F6E57] to-[#1a5b48] text-white py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#24E87A_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

          <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-emerald-300 text-xs md:text-sm font-semibold tracking-wider uppercase mb-4 border border-white/20">
              Empathetic & Evidence-Based Therapy
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Psychological Counselling <br className="hidden sm:block" />
              <span className="text-[#38ef7d]">Everything you seek is inside of you</span>
            </h1>
            <p className="text-emerald-100 text-base sm:text-lg md:text-xl font-light max-w-2xl leading-relaxed mb-8">
              Life transitions can become challenging even for those who have coped well in the past. Our certified psychologists and counsellors provide a safe, compassionate space to discover clarity, inner strength, and sustainable wellness.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-[#0F6E57] hover:bg-emerald-50 px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
              >
                <span>Book a Session</span>
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

        {/* 2. OUR APPROACH / INTRO */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1f7456] mb-4">
              A Safe Space for Healing & Growth
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
              Counselling is a collaborative process where you work alongside a trained psychologist to gain fresh perspectives, untangle emotional complexities, and feel more in charge of your life choices and relationships.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Whether you are looking for short-term supportive counselling to overcome a current life dilemma, or seeking deeper therapeutic engagement to foster lasting change, our team is here for you.
            </p>
          </div>
        </section>

        {/* 3. COUNSELLING OFFERINGS (WITH HEROICONS) */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0F6E57]">
              Specialized Care Tracks
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Our Counselling Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {counsellingOfferings.map((item, idx) => {
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

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-emerald-50 text-[#0F6E57]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. WHY COUNSELLING HELPS */}
        <section className="py-16 bg-white border-y border-gray-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0F6E57]">
                The Transformation
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                How Counselling Helps You Thrive
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((b, idx) => {
                const IconComponent = b.icon;
                return (
                  <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col">
                    <div className="w-11 h-11 rounded-xl bg-emerald-100 text-[#0F6E57] flex items-center justify-center mb-4 shrink-0">
                      <IconComponent className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">{b.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{b.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. HELPLINE & TIMINGS CARD */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#0c4737] via-[#0F6E57] to-[#145743] rounded-4xl text-white p-8 sm:p-12 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-emerald-300 text-xs font-bold tracking-wider uppercase mb-3">
                  Direct Support
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  Connect With Our Counsellors
                </h3>
                <p className="text-emerald-100 text-sm leading-relaxed mb-6">
                  We are here to support your mental health journey. Reach out for in-person consultations or confidential tele-counselling.
                </p>

                <div className="space-y-3 text-sm">
                  <p className="flex items-center gap-3">
                    <EnvelopeIcon className="w-5 h-5 text-emerald-300 shrink-0" />
                    <span>sivamresearchfoundation@gmail.com</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <PhoneIcon className="w-5 h-5 text-emerald-300 shrink-0" />
                    <span>(+91) 9952 9416 14</span>
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 space-y-4 text-sm">
                <h4 className="font-bold text-base text-white border-b border-white/20 pb-2 flex items-center gap-2">
                  <CalendarDaysIcon className="w-5 h-5 text-[#38ef7d]" />
                  <span>Operating Timings</span>
                </h4>
                <div className="flex justify-between items-center text-emerald-100">
                  <span className="flex items-center gap-1.5">
                    <ClockIcon className="w-4 h-4 text-emerald-300" />
                    <span>Mon – Fri (Consultations):</span>
                  </span>
                  <span className="font-semibold text-white">9:30 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center text-emerald-100">
                  <span className="flex items-center gap-1.5">
                    <ClockIcon className="w-4 h-4 text-emerald-300" />
                    <span>Saturday:</span>
                  </span>
                  <span className="font-semibold text-white">9:30 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center text-[#38ef7d] font-medium pt-2 border-t border-white/10">
                  <span>Helpline (Mon – Fri):</span>
                  <span className="font-bold">1:00 PM – 10:00 PM</span>
                </div>

                <div className="pt-2">
                  <a
                    href="tel:+919952941614"
                    className="w-full text-center bg-[#38ef7d] hover:bg-[#2dd36f] text-gray-950 font-bold py-2.5 rounded-xl text-sm block transition-colors shadow-md"
                  >
                    Call Helpline Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}