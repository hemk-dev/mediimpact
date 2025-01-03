"use client";
import React, { useEffect } from "react";
import { BsDashLg } from "react-icons/bs";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/styles/globals.css";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const DifferenceSection = () => {
  useEffect(() => {
    gsap.from(".difference-text", {
      x: 200,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".difference-text",
        start: "top 80%",
        end: "bottom top",
      },
    });

    gsap.from(".difference-image", {
      x: -200,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".difference-image",
        start: "top 80%",
        end: "bottom top",
      },
    });

    const button = document.querySelector(".difference-button");

    button.addEventListener("mouseenter", () => {
      gsap.to(".difference-button", {
        scale: 1.1,
        duration: 0.3,
        ease: "power1.out",
      });
    });

    button.addEventListener("mouseleave", () => {
      gsap.to(".difference-button", {
        scale: 1,
        duration: 0.3,
        ease: "power1.out",
      });
    });
  }, []);

  return (
    <div className="flex flex-wrap justify-around items-center gap-8 p-4 my-20 lg:my-32">
      <div className="difference-image">
        <div className="relative">
          <Image
            className="map-effect rounded-md md:w-[396px] md:h-[264px] w-[392px] h-[244px]"
            src="/images/heart.jpg"
            alt="Image"
            width={500}
            height={324}
          />
        </div>
      </div>

      <div className="text-left mb-10 lg:max-w-[40%] max-w-full difference-text">
        <h2 className="text-3xl font-semibold text-[#02451E] leading-relaxed tracking-wider">
          Making a Difference in Global Healthcare.
        </h2>
        <p className="text-[#27312bd7] tracking-wider leading-loose text-justify mt-4 text-lg">
          At <span className="font-bold text-[#0f2116d7]">MEDI IMPACT</span>,
          our mission is to change the world by improving lives, supporting
          healthier communities, and creating a better future for all through
          continuous care and innovation.
        </p>
        <div className="mt-6">
          <button className="difference-button flex gap-2 tracking-wider items-center hover:text-xl">
            <BsDashLg className="text-xl" /> <Link href="/about">About Us</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DifferenceSection;
