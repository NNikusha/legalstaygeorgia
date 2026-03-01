import Benefits from "@/components/molecules/Home/Benefits/Benefits";
import Services from "@/components/molecules/Home/Stories/Stories";
import HeroSection from "@/components/molecules/Home/HeroSection/HeroSection";
import Contact from "@/components/molecules/Home/Contact/Contact";
import React from "react";
import Header from "@/components/molecules/Header/Header";
import Footer from "@/components/molecules/Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Services />
      <Benefits />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
