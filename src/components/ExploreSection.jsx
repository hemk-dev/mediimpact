"use client";

import React, { useEffect } from "react";
import { BsDashLg } from "react-icons/bs";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/styles/globals.css";

gsap.registerPlugin(ScrollTrigger);

const ExploreSection = () => {
  useEffect(() => {
    const initAnimation = setTimeout(() => {
      ScrollTrigger.refresh();

      gsap.from(".explore-text", {
        x: -200,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".explore-text",
          start: "top 85%",
          end: "bottom top",
          markers: false,
        },
      });

      gsap.from(".explore-image", {
        x: 200,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".explore-image",
          start: "top 85%",
          end: "bottom top",
          markers: false,
        },
      });
    }, 100);

    return () => {
      clearTimeout(initAnimation);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);
  return (
    <div className="">
      <div className="flex flex-wrap justify-around items-center gap-2 p-4 my-20 lg:my-32 ">
        <div className="text-left mb-10 lg:max-w-[40%] max-w-full explore-text">
          <h2 className="text-3xl font-semibold text-[#02451E] leading-relaxed tracking-wider">
            We Provide Therapeutic Solutions in Over 10+ Countries.
          </h2>
          <p className="text-[#27312bd7] tracking-wider leading-loose text-justify mt-4 text-lg">
            We deliver high-quality pharmaceutical products to over 10
            countries, ensuring access to reliable and effective healthcare
            solutions worldwide.
          </p>
          {/* <div className="mt-6">
          <button className="explore-button flex gap-2 tracking-wider items-center ">
            <BsDashLg className="text-xl" /> Explore Products
          </button>
        </div> */}
        </div>

        <div>
          <div className="relative explore-image">
            <Image
              className="map-effect rounded-md md:w-[496px] md:h-[244px] w-[392px] h-[244px]"
              src="/images/maps.png"
              alt="map Image"
              width={500}
              height={324}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
