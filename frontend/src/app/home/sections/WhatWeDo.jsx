import Link from "next/link";
import {
  ChatBubbleBottomCenterTextIcon,
  ShieldCheckIcon,
  BeakerIcon,
  AcademicCapIcon,
  BuildingLibraryIcon,
  HeartIcon,
  UserGroupIcon,
  GlobeAltIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export default function WhatWeDo() {
  const services = [
    {
      id: "01",
      icon: ChatBubbleBottomCenterTextIcon,
      title: "Mental Health Counselling",
      description:
        "Providing individual, family, couples, child, adolescent, and geriatric counselling using evidence-based psychological interventions.",
      href: "/services/counselling-services",
    },
    {
      id: "02",
      icon: ShieldCheckIcon,
      title: "Addiction Recovery Services",
      description:
        "Offering psychosocial assessment, Motivational Enhancement Therapy (MET), relapse prevention, and rehabilitation planning.",
      href: "/services/rehabilitation-services",
    },
    {
      id: "03",
      icon: BeakerIcon,
      title: "Research & Innovation",
      description:
        "Conducting clinical research, programme evaluations, intervention development, policy research, and publishing through IJMHPS.",
      href: "/services/research-and-publication",
    },
    {
      id: "04",
      icon: AcademicCapIcon,
      title: "Training & Capacity Building",
      description:
        "Organizing certificate courses, internships, supervised fieldwork, and continuing professional education (CPD) for clinicians.",
      href: "/services/internship-and-training",
    },
    {
      id: "05",
      icon: BuildingLibraryIcon,
      title: "School & College Mental Health",
      description:
        "Implementing life skills education, emotional well-being programs, stress management, career guidance, and SEL initiatives.",
      href: "/services/internship-and-training",
    },
    {
      id: "06",
      icon: HeartIcon,
      title: "Clinical Psychology Services",
      description:
        "Comprehensive psychological assessments, psychodiagnostic evaluations, Cognitive Behaviour Therapy (CBT), and trauma care.",
      href: "/services/counselling-services",
    },
    {
      id: "07",
      icon: UserGroupIcon,
      title: "Psychiatric Social Work",
      description:
        "Biopsychosocial assessments, family psychoeducation, caregiver support, and community-based rehabilitation.",
      href: "/services/rehabilitation-services",
    },
    {
      id: "08",
      icon: GlobeAltIcon,
      title: "Community Mental Health",
      description:
        "Conducting awareness campaigns, mental health screening camps, suicide prevention, and community outreach.",
      href: "/services/rehabilitation-services",
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0F6E57]">
            Core Domains
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1f7456] mt-2">
            What We Do
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mt-3">
            Following a comprehensive, multidisciplinary approach to promote mental health and psychosocial well-being across India.
          </p>
        </div>

        {/* Grid Layout (Mobile: 1 col, Tablet: 2 cols, Desktop: 4 cols) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group bg-[#839e79]/15 hover:bg-[#839e79]/25 border border-[#839e79]/30 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-xs text-[#1f7456] group-hover:bg-[#1f7456] group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-6 h-6 stroke-[1.75]" />
                    </div>
                    <span className="text-xs font-bold font-mono text-[#1f7456] bg-white px-2.5 py-1 rounded-full shadow-2xs">
                      {service.id}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-gray-900 text-base font-bold mb-3 leading-snug">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Working Link Button */}
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1f7456] hover:text-[#0c4737] group-hover:underline pt-2"
                >
                  <span>Learn More</span>
                  <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}