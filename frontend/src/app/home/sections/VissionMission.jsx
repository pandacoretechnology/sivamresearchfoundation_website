"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";
import { motion, useReducedMotion } from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sections = [
  {
    id: "vision",
    label: "Our Purpose",
    title: "Our Vision",
    image: "/images/home/vission.png",
    alt: "Therapist and patient during a consultation",
    description:
      "To create a mentally healthy, resilient, and inclusive society where every individual has access to quality mental health care, psychosocial support, and opportunities to achieve their fullest potential.",
    points: [
      "Mental health services are accessible, affordable, and available to everyone.",
      "Individuals and families receive timely psychological support and evidence-based care.",
      "Communities promote emotional well-being, resilience, and social inclusion.",
      "Research and innovation strengthen mental health policies and clinical practices.",
      "Mental illness is understood with compassion, dignity, and without stigma.",
    ],
  },
  {
    id: "mission",
    label: "Our Commitment",
    title: "Our Mission",
    image: "/images/home/mission.png",
    alt: "Mental health professionals supporting patient well-being",
    description:
      "To improve mental health and quality of life through integrated clinical services, research, education, advocacy, and community engagement while empowering individuals, families, and communities with evidence-based psychosocial interventions.",
    points: [
      "Providing professional psychological counselling and psychiatric social work services.",
      "Delivering evidence-based clinical interventions for mental health and addiction recovery.",
      "Conducting research, programme evaluation, and intervention development.",
      "Training students, professionals, and caregivers in mental health care.",
      "Raising awareness through workshops, campaigns, and community outreach.",
    ],
  },
];

export default function VisionMission() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 28,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.65,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="vision-mission"
      className="overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mb-14 max-w-2xl text-center sm:mb-20"
        >
          <span
            className={`${poppins.className} inline-flex items-center gap-2 rounded-full border border-[#185e49]/15 bg-[#185e49]/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#185e49] sm:text-sm`}
          >
            Who We Are
          </span>

          <h2
            className={`${poppins.className} mt-5 text-3xl font-semibold leading-tight tracking-tight text-[#185e49] sm:text-4xl lg:text-5xl`}
          >
            Driven by Purpose,
            <span className="mt-1 block text-[#b28b55]">
              Guided by Compassion
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
            We are committed to building a world where mental health matters
            and every individual has the opportunity to thrive.
          </p>
        </motion.div>

        {/* Vision and Mission */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-28">
          {sections.map((section, index) => {
            const reverse = index % 2 !== 0;

            return (
              <motion.article
                key={section.id}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20"
              >
                {/* Image */}
                <div
                  className={`relative w-full ${reverse ? "lg:order-2" : "lg:order-1"
                    }`}
                >
                  <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-2xl border border-[#185e49]/10 bg-[#f2f7f4] shadow-[0_12px_40px_rgba(24,94,73,0.08)] sm:rounded-3xl lg:aspect-[5/4]">
                    <Image
                      src={section.image}
                      alt={section.alt}
                      fill
                      sizes="(max-width: 1023px) 100vw, (max-width: 1279px) 50vw, 560px"
                      className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                    />
                  </div>

                  {/* Decorative accent */}
                  <div
                    aria-hidden="true"
                    className={`absolute -bottom-3 -z-10 h-20 w-20 rounded-2xl bg-[#dcebe2] sm:-bottom-4 sm:h-24 sm:w-24 ${reverse
                        ? "-left-2 sm:-left-4"
                        : "-right-2 sm:-right-4"
                      }`}
                  />
                </div>

                {/* Content */}
                <div
                  className={`flex w-full flex-col ${reverse ? "lg:order-1" : "lg:order-2"
                    }`}
                >
                  <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#185e49]/5 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#185e49] sm:text-sm">
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 rounded-full bg-[#b28b55]"
                    />
                    {section.label}
                  </span>

                  <h3
                    className={`${poppins.className} text-3xl font-semibold leading-tight tracking-tight text-[#185e49] sm:text-4xl lg:text-[2.75rem]`}
                  >
                    {section.title}
                  </h3>

                  <p className="mt-5 text-justify text-sm leading-7 text-gray-700 sm:text-base sm:leading-8">
                    {section.description}
                  </p>

                  <div className="my-6 h-px w-full bg-gradient-to-r from-[#185e49]/30 via-[#185e49]/10 to-transparent sm:my-7" />

                  <ul className="space-y-4 sm:space-y-5">
                    {section.points.map((point, pointIndex) => (
                      <li
                        key={`${section.id}-${pointIndex}`}
                        className="flex items-start gap-3.5"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#185e49]/10 text-[#185e49]"
                        >
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            className="h-3.5 w-3.5"
                          >
                            <path
                              d="m5 10 3.2 3.2L15 6.5"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>

                        <p className="text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                          {point}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}