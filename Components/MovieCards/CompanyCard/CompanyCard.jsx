"use client";
import React, { useState } from "react";
import Image from "next/image";
import fallbackImage from "@/assets/fallbackImage.svg";

const CompanyCard = ({ mediaInfo }) => {
  const [mouseHover, setMouseHover] = useState(false);

  const [image, setImage] = useState(
    `https://image.tmdb.org/t/p/original${
      mediaInfo?.logo_path != null && mediaInfo.logo_path
    }` || fallbackImage
  );

  return (
    <div
      className="w-64 h-96 flex flex-shrink-0 relative overflow-hidden rounded-md dark:bg-gray-950 bg-slate-200 "
      onMouseEnter={() => setMouseHover(true)}
      onMouseLeave={() => setMouseHover(false)}
    >
          <Image quality={100} layout="responsive" width={1}  height={1}
        src={typeof image !== "string" ? image.src : image}
        className="absolute w-full h-full object-cover"
        alt={mediaInfo?.name}
        onError={() => {
          setImage(fallbackImage);
        }}
       
      />
      <div
        className={`absolute bg-gradient-to-t from-gray-700 to-transparent w-full h-1/2 flex justify-start items-end pl-4 pb-6 cursor-pointer  transition-all ease-in-out duration-300  ${
          mouseHover ? "bottom-0 " : "bottom-[-300px]"
        }`}
      >
        <p className="text-customWhite font-semibold font-Dosis text-2xl">
          {mediaInfo?.name}
        </p>
      </div>
    </div>
  );
};

export default CompanyCard;
