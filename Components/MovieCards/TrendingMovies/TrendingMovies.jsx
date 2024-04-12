"use client";
import React, { useState } from "react";
import testImage from "@/assets/testImage.jpg";
import Image from "next/image";

const TrendingMovies = () => {
  const [mouseHover, setMouseHover] = useState(false);
  return (
    <div
      className="w-72 h-96 bg-red-600 flex flex-shrink-0 relative overflow-hidden rounded-md"
      onMouseEnter={() => setMouseHover(true)}
      onMouseLeave={() => setMouseHover(false)}
    >
      <Image src={testImage} className="absolute w-full h-full object-cover" />
        <div className={`absolute bg-gradient-to-t from-gray-700 to-transparent w-full h-1/2 flex justify-start items-end pl-4 pb-6 cursor-pointer  transition-all ease-in-out duration-300  ${mouseHover ? "bottom-0 " : "bottom-[-300px]"}`}>
          <p className="text-customWhite font-semibold font-Dosis text-2xl">
            MovieName
          </p>
        </div>
     
    </div>
  );
};

export default TrendingMovies;
