import Footer from "@/components/Footer";
import Navbar from "../../components/Navbar";
import Hero from "./sections/Hero";
import OurProfessional from "./sections/OurProfessional";
import VisionMission from "./sections/VissionMission";
import WhatWeDo from "./sections/WhatWeDo";
import WhyChooseUs from "./sections/WhyChooseUs";

const Home = () => {
  return (
    <>  

      {/*Navbar*/}
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/*our vission section*/}
      <VisionMission />

      {/*our professional section*/}
      <OurProfessional />
        
      {/*what we do section*/}
      <WhatWeDo/>

      {/*why choose us section*/}
      <WhyChooseUs/>

      {/*footer*/}
      <Footer/>
    </>
  );
};

export default Home;
