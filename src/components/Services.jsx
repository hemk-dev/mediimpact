"use client";

import React, { useEffect } from "react";
import { TbWorldPin } from "react-icons/tb";
import { FaPills } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useEffect(() => {
    // Animation for each service card on scroll
    gsap.from(".service-card", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      stagger: 0.3, // Add stagger to delay the animations slightly
      scrollTrigger: {
        trigger: ".service-card",
        start: "top 80%",
        end: "bottom top",
      },
    });

    // Hover effect to scale the cards slightly
    const cards = document.querySelectorAll(".service-card");

    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power1.out" });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, { scale: 1, duration: 0.3, ease: "power1.out" });
      });
    });
  }, []);

  return (
    <section className="bg-[#08A576] py-16 flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 max-w-7xl px-4">
        <div className="service-card bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-[#08A576] text-4xl mb-4 flex justify-center">
            <TbWorldPin />
          </div>
          <h3 className="text-[#02451E] text-2xl font-bold">10+</h3>
          <p className="text-[#27312bd7]">Countries Served</p>
        </div>
        <div className="service-card bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-[#08A576] text-4xl mb-4 flex justify-center">
            <FaPills />
          </div>
          <h3 className="text-[#02451E] text-2xl font-bold">100+</h3>
          <p className="text-[#27312bd7]">Pharmaceutical Products</p>
        </div>
        <div className="service-card bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-[#08A576] text-4xl mb-4 flex justify-center">
            <IoCall />
          </div>
          <h3 className="text-[#02451E] text-2xl font-bold">24/7</h3>
          <p className="text-[#27312bd7]">Customer Support</p>
        </div>
        <div className="service-card bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-[#08A576] text-4xl mb-4 flex justify-center">
            <AiOutlineGlobal />
          </div>
          <h3 className="text-[#02451E] text-2xl font-bold">Global</h3>
          <p className="text-[#27312bd7]">Delivery Excellence</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
