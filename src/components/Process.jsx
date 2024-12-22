"use client";
import Image from "next/image";
import React from "react";

const Process = ({ title, text, img, reverse }) => {
  return (
    <div
      className={`flex flex-col lg:flex-row  ${
        reverse ? "lg:flex-row-reverse" : ""
      } items-start gap-8 text-white`}
    >
      {/* Text Section */}
      <div className="flex-1 flex flex-col gap-4 px-4 lg:px-8">
        <h2 className="font-semibold text-xl lg:text-2xl">{title}</h2>
        <p className="text-[#E5FFF3] font-light text-base lg:text-lg leading-relaxed ">
          {text}
        </p>
      </div>

      {/* Image Section */}
      <div className=" ">
        <Image
          className="rounded-md w-[364px] h-[216px] sm:w-[392px] sm:h-[244px] "
          src={img}
          alt={`${title} Image`}
          width={400}
          height={300}
          priority
        />
      </div>
    </div>
  );
};

export default Process;
