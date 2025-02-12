"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/styles/globals.css";

gsap.registerPlugin(ScrollTrigger);

const IsoCertification = () => {
  useEffect(() => {
    const initAnimation = setTimeout(() => {
      ScrollTrigger.refresh();
      gsap.from(".certification-text2", {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".certification-text",
          start: "top 80%",
          end: "bottom top",
        },
      });

      gsap.from(".certification-image2", {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".certification-image",
          start: "top 80%",
          end: "bottom top",
        },
      });
    }, 100);
    return () => {
      clearTimeout(initAnimation);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="flex flex-wrap-reverse justify-around items-center gap-2 p-4 my-20 lg:my-32">
      <div className="text-left mb-10 lg:max-w-[40%] max-w-full certification-text2">
        <h2 className="text-3xl font-semibold text-[#02451E] leading-relaxed tracking-wider">
          ISO Certification - Commitment to Quality and Excellence
        </h2>
        <p className="text-[#27312bd7] tracking-wider leading-loose text-justify mt-4 text-lg">
          Our ISO Certification ensures that our processes in pharmaceutical
          manufacturing and operations uphold international standards of
          quality. Using ISO-approved procedures, risk management protocols, and
          quality assurance, we guarantee all products comply with regulatory,
          safety, and environmental requirements. Our commitment to maintaining
          consistent quality for our global clientele is emphasized through this
          ISO Certification.
        </p>
      </div>
      <div>
        <div className="relative certification-image2">
          <Image
            className="map-effect rounded-md md:w-[440px] md:h-[244px] w-[454px] h-[224px]"
            src="/images/ISO.png"
            alt="map Image"
            width={500}
            height={324}
          />
        </div>
      </div>
    </div>
  );
};

export default IsoCertification;
