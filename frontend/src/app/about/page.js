import Footer from "@/components/Footer";
import Navbar from "../../components/Navbar";
import GallerySection from "./section/GallerySection";
import HeroSection from "./section/HeroSection";
import WhyChooseus from "./section/WhyChooseus";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* 1. HERO SECTION */}
        {/* Background color matches the dark green theme */}
        <HeroSection />

        {/* 2. WHY CHOOSE US SECTION */}
        <WhyChooseus />

        {/* 3. GALLERY SECTION */}
        <GallerySection />

        {/* 4. FOOTER */}
        <Footer />
      </main>
    </>
  );
};

export default About;
