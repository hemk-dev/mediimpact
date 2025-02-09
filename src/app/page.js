"use client"
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import CertificationsSection from "@/components/CertificationsSection";
import ChooseUsSection from "@/components/ChooseUsSection";
import DifferenceSection from "@/components/DifferenceSection";
import ExploreSection from "@/components/ExploreSection";
import HeroSection from "@/components/HeroSection";
import OurProcess from "@/components/OurProcess";
import OurProducts from "@/components/OurProducts";
import Services from "@/components/Services";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const loaderRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div
          ref={loaderRef}
          className="fixed inset-0 flex items-center justify-center bg-cover bg-center backdrop-blur-sm z-20"
          style={{ backgroundImage: "url('/images/loader.jpg')" }}
        >
          <Image
            src="/images/logo.png"
            alt="Medi Impact Logo"
            width={400}
            height={400}
            className="animate-pulse"
          />
        </div>
      )}
      {!loading && (
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
      )}
    </>
  );
};

export default Home;
