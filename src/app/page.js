import CertificationsSection from "@/components/CertificationsSection";
import ChooseUsSection from "@/components/ChooseUsSection";
import DifferenceSection from "@/components/DifferenceSection";
import ExploreSection from "@/components/ExploreSection";
import HeroSection from "@/components/HeroSection";
import OurProcess from "@/components/OurProcess";
import OurProducts from "@/components/OurProducts";
import Services from "@/components/Services";
import React from "react";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ExploreSection />
      <Services />
      <CertificationsSection />
      <OurProducts />
      <DifferenceSection />
      <OurProcess />
      <ChooseUsSection />
    </>
  );
};

export default Home;
