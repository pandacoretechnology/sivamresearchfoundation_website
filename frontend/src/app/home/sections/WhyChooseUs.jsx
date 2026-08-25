import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Header */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#1f7456] mb-10 md:mb-12">
          Why Choose Sivam Research Foundation
        </h2>

        {/* Image Container */}
        {/* The aspect ratio is handled dynamically using responsive heights */}
        <div className="relative w-full max-w-xl h-40 md:h-40 lg:h-65 rounded-2xl overflow-hidden shadow-md mb-10 md:mb-12">
          <Image
            src="/images/home/why_choose_us.png" // Replace with your actual image path
            alt="A supportive group therapy session"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Description Text */}
        <p className="text-base md:text-lg lg:text-xl text-gray-800 font-medium leading-relaxed max-w-4xl">
          We combine clinical excellence, research, education, and community engagement to deliver holistic, person-centred mental health services.
        </p>
        
      </div>
    </section>
  );
}