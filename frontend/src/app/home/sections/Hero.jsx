import Button2 from "../Button2";
import Button from "../Button";

const Hero = () => {
  return (
    <>
      <section className="relative min-h-screen max-sm:min-h-[80vh] max-sm:bg-[url('/images/home/home_hero_mob.png')] bg-[url('/images/home/home_hero2.png')] bg-cover bg-center flex flex-col items-center justify-center gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-[#38ef7d] font-extrabold text-3xl max-sm:text-3xl md:text-5xl lg:text-6xl text-center tracking-tight leading-tight px-2 drop-shadow-sm">
          Welcome to Sivam Research <br /> Foundation
        </h1>
        
        <div className="flex flex-col items-center justify-center w-full max-w-4xl gap-4 sm:gap-6 font-normal text-base max-sm:text-sm text-center text-emerald-50">
          <p className="font-semibold text-lg md:text-xl text-white tracking-wide">
            Advancing Mental Health, Inspiring Research, Transforming Lives
          </p>
          <p className="leading-relaxed text-emerald-100/90 font-light max-w-3xl">
            Sivam Research Foundation (SRF) is a non-profit organization
            dedicated to promoting mental health, psychological well-being,
            research excellence, education, and community empowerment through
            evidence-based, compassionate, and inclusive services. We believe
            that mental health is a fundamental human right and that every
            individual deserves access to quality mental health care,
            psychosocial support, and opportunities for personal growth
            regardless of their background.
          </p>
        </div>
        
        <div className="pt-2 sm:pt-4 flex max-sm:flex-col gap-4">
          <Button />
          <Button2 />
        </div>
      </section>
    </>
  );
};

export default Hero;