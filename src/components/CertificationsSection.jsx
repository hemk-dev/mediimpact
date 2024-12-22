"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/styles/globals.css";

gsap.registerPlugin(ScrollTrigger);

const CertificationsSection = () => {
  useEffect(() => {
    // Animate the text
    gsap.from(".certification-text", {
      x: 200,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".certification-text",
        start: "top 80%",
        end: "bottom top",
      },
    });

    // Animate the image
    gsap.from(".certification-image", {
      x: -200,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".certification-image",
        start: "top 80%",
        end: "bottom top",
      },
    });
  }, []);

  return (
    <div className="flex flex-wrap justify-around items-center gap-2 p-4 my-20 lg:my-32">
      <div>
        <div className="relative certification-image">
          <Image
            className="map-effect rounded-md md:w-[296px] md:h-[244px] w-[292px] h-[244px]"
            src="/images/whogmp.png"
            alt="map Image"
            width={500}
            height={324}
          />
        </div>
      </div>
      <div className="text-left mb-10 lg:max-w-[40%] max-w-full certification-text">
        <h2 className="text-3xl font-semibold text-[#02451E] leading-relaxed tracking-wider">
          Committed to Excellence with WHO-GMP Certification
        </h2>
        <p className="text-[#27312bd7] tracking-wider leading-loose text-justify mt-4 text-lg">
          As a WHO-GMP Certified Company, we adhere to the highest standard in
          pharmaceutical manufacturing. With a commitment to safety, quality,
          and innovation, every product meets global benchmarks. Advanced
          facilities, stringent quality control, and a skilled team deliver
          trusted solutions for better health.
        </p>
      </div>
    </div>
  );
};

export default CertificationsSection;