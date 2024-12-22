"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProgressBar = ({ sectionRef }) => {
  const progressRef = useRef(null);
  const circleRefs = useRef([]); 
  useEffect(() => {
    if (sectionRef.current) {
      // Animate the progress bar
      gsap.to(progressRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 0.9,
          markers: false,
        },
        height: "100%",
        ease: "none",
      });

      circleRefs.current.forEach((circle, index) => {
        const position = index * 25; 
        gsap.to(circle, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: `${position}% center`, 
            end: `${position + 25}% center`,
            scrub: true,
            markers: false,
          },
          backgroundColor: "#FFFFFF",
        });
      });
    }
  }, [sectionRef]);

  return (
    <div className="relative w-2 bg-[#3FBE97] h-full">
      <div
        ref={progressRef}
        className="absolute top-0 left-0 w-full bg-[#E5FFF3] h-0"
      ></div>

      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          ref={(el) => (circleRefs.current[index] = el)}
          className="absolute w-10 h-10 md:w-12 md:h-12 bg-[#3FBE97] rounded-full transform -translate-x-1/2 transition-all duration-300"
          style={{ top: `${index * 25}%`, left: "50%" }}
        ></div>
      ))}
    </div>
  );
};

export default ProgressBar;
