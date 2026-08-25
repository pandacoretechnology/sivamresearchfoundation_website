import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const HeroSection = () => {
  return (
    <>
      <section className="relative w-full max-sm:bg-[url('/images/about/about_bg_mob.png')] bg-[url('/images/about/about_bg.png')] bg-center bg-no-repeat bg-cover min-h-[50vh] flex flex-col items-center pt-20 pb-40 overflow-hidden">
        {/* Spotlight gradient effect */}
        <div className="absolute top-0 left-0 w-1/2 h-full from-white/10 to-transparent pointer-events-none rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/4"></div>

        <div className="relative w-full max-w-3xl h-48 z-10 opacity-90">
          <Image
            src="/images/chairs.png"
            alt="Empty chairs arranged in a circle"
            fill
            className="object-contain object-bottom hidden"
          />
        </div>
      </section>

      {/* OVERLAPPING INFO CARD */}
      <section className="relative w-full max-w-4xl mx-auto px-4 -mt-32 z-20">
        <div className="bg-white rounded-4xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-8 sm:p-12 md:p-14 flex flex-col items-center text-center border border-gray-100">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1f7456] mb-2">
            Non-Profit Organization
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f7456] mb-6">
            Sivam Research Foundation
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl mb-8">
            SRF is a non-profit organization committed to advancing mental health, research, education, and community well-being. Through evidence-based counselling, rehabilitation, training, research, and awareness programmes, SRF empowers individuals, families, and communities to achieve better mental health and an improved quality of life while promoting resilience, inclusion, and social responsibility.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-[#1f7456] bg-[#1f7456] text-white font-semibold hover:bg-[#0c4737] hover:border-[#0c4737] shadow-md hover:shadow-lg transition-all duration-300"
            >
              <span>Explore All Services</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-gray-200 text-gray-700 font-semibold hover:border-[#1f7456] hover:text-[#1f7456] transition-all duration-300"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
