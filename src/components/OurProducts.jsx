"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const OurProducts = () => {
  useEffect(() => {
    // Animate the entire section
    gsap.from(".products-section", {
      opacity: 0,
      y: 50,
      duration: 1,
    });

    // Animate individual product cards
    gsap.from(".product-card", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      delay: 1, // Wait for section animation to complete
    });

    // Animate product titles
    gsap.from(".product-title", {
      opacity: 0,
      x: -50,
      duration: 1,
      delay: 1.5,
      stagger: 0.3,
    });
  }, []);

  return (
    <div className="products-section bg-[#08A576] py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Our <span className="text-[#02451E] ">Products</span>
        </h2>
        <p className="text-white text-lg mb-8">
          MEDIIMPACT offers a diverse range of products, thoughtfully
          categorized into distinct groups.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:mx-16 mx-4">
          {[
            {
              title: "Pharmaceutical Formulation",
              imageSrc: "/images/formulation.jpg",
              altText: "Pharmaceutical Formulation Image",
            },
            {
              title: "Nutraceuticals",
              imageSrc: "/images/nutraceuticals.jpg",
              altText: "Nutraceuticals Image",
            },
            {
              title: "Cosmetics and Skin Care",
              imageSrc: "/images/cosmetics.jpg",
              altText: "Cosmetics and Skin Care Image",
            },
          ].map((product, index) => (
            <div
              key={index}
              className="product-card bg-white shadow-lg rounded-lg relative"
            >
              <div className="w-full h-64 overflow-hidden rounded-lg">
                <Image
                  className="product-image object-cover w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-105"
                  src={product.imageSrc}
                  alt={product.altText}
                  width={500}
                  height={324}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black rounded-b-lg bg-opacity-50">
                <h3 className="product-title text-lg font-semibold text-white">
                  {product.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <motion.div
          className="mt-8"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/products">
            <button className="px-6 py-3 bg-white text-lg font-medium rounded-md text-[#08A576] hover:text-white hover:bg-[#1d4e3f] transition duration-300">
              Explore more
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default OurProducts;