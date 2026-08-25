import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function VisionMission() {
  return (
    <section className="bg-white py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-20 md:gap-32">
        
        {/* --- Our Vision Section --- */}
        {/* Changed to lg:flex-row to prevent crowding on smaller tablets */}
        <div className="w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-50 ">
          {/* Image */}
          <div className="w-full max-w-100 shrink-0">
            <Image
              src="/images/home/vission.png" // Replace with your actual image path
              alt="Therapist and patient during a consultation"
              width={400}
              height={450}
              className="w-full h-auto object-cover rounded-3xl border-2"
            />
          </div>

          {/* Content */}
          <div className="w-fit flex flex-col gap-4 md:gap-6 ">
            <h2
              className={`text-4xl md:text-5xl font-normal text-[#185e49] ${poppins.className}`}
            >
              Our Vision
            </h2>
            {/* Replaced invalid w-2xl with max-w-2xl */}
            <p className="w-full max-w-2xl text-base md:text-lg font-semibold text-black text-justify">
              To create a mentally healthy, resilient, and inclusive society
              where every individual has access to quality mental health care,
              psychosocial support, and opportunities to achieve their fullest
              potential.
            </p>
            <ul className="flex flex-col gap-3 md:gap-4 text-[#8a8a8a] text-sm md:text-base leading-relaxed font-extralight">
              <li className="flex gap-3">
                <span className="text-[#8a8a8a] mt-1">•</span>
                <p>
                  Mental health services are accessible, affordable, and
                  available to everyone.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-[#8a8a8a] mt-1">•</span>
                <p>
                  Individuals and families receive timely psychological support
                  and evidence-based care.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-[#8a8a8a] mt-1">•</span>
                <p>
                  Communities promote emotional well-being, resilience, and
                  social inclusion.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-[#8a8a8a] mt-1">•</span>
                <p>
                  Research and innovation strengthen mental health policies and
                  clinical practices.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-[#8a8a8a] mt-1">•</span>
                <p>
                  Mental illness is understood with compassion, dignity, and
                  without stigma.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* --- Our Mission Section --- */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
          {/* Image */}
          <div className="w-full max-w-100 shrink-0">
            <Image
              src="/images/home/mission.png" // Replace with your actual image path
              alt="Therapist and patient during a consultation"
              width={400}
              height={450}
              className="w-full h-auto object-cover rounded-3xl border-2"
            />
          </div>

          {/* Content */}
          <div className="w-full flex flex-col gap-4 md:gap-6">
            <h2
              className={`text-4xl md:text-5xl font-normal text-[#185e49] ${poppins.className}`}
            >
              Our Mission
            </h2>
            <p className="w-full max-w-2xl text-base md:text-lg font-semibold text-black text-justify">
              To improve mental health and quality of life through integrated
              clinical services, research, education, advocacy, and community
              engagement while empowering individuals, families, and communities
              with evidence-based psychosocial interventions.
            </p>
            <ul className="flex flex-col gap-3 md:gap-4 text-[#8a8a8a] text-sm md:text-base leading-relaxed font-extralight">
              <li className="flex gap-3">
                <span className="text-[#8a8a8a] mt-1">•</span>
                <p>
                  Providing professional psychological counselling and
                  psychiatric social work services.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-[#8a8a8a] mt-1">•</span>
                <p>
                  Delivering evidence-based clinical interventions for mental
                  health and addiction recovery.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-[#8a8a8a] mt-1">•</span>
                <p>
                  Conducting research, programe evaluation, and intervention
                  development.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-[#8a8a8a] mt-1">•</span>
                <p>
                  Training students, professionals, and caregivers in mental
                  health care.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-[#8a8a8a] mt-1">•</span>
                <p>
                  Raising awareness through workshops, campaigns, and community
                  outreach.
                </p>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    </section>
  );
}