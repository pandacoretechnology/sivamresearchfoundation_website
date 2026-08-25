import Button2 from "../Button2";
import Button from "../Button";


import { Playfair_Display, Poppins } from "next/font/google";

const playfairdisplay = Playfair_Display({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


const Hero = () => {
  return (
    <>
        <section className="relative min-h-screen max-sm:min-h-[80vh] max-sm:bg-[url('/images/home/home_hero_mob.png')] bg-[url('/images/home/home_hero2.png')] bg-cover bg-center flex flex-col items-center justify-center gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 lg:px-8">
          <p
            className={`text-[#24E87A] ${playfairdisplay.className} text-2xl max-sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-center leading-tight px-2`}
          >
            Welcome to Sivam Research <br /> Foundation
          </p>
          <div
            className={`flex flex-col items-center justify-center w-full max-w-[90%] gap-4 sm:gap-6 ${poppins.className} font-light text-base max-sm:text-sm text-center text-white`}
          >
            <p className="font-medium">
              Advancing Mental Health, Inspiring Research, Transforming Lives
            </p>
            <p className="">
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
            <Button2/>
          </div>
        </section>
    </>
  )
}

export default Hero