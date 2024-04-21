"use client";
import Image from "next/image";
import React, { useState } from "react";
import fallbackImage from "@/assets/fallbackImage.svg";

const FooterBanner = ({ bannerImage }) => {
  let randomIndex = Math.floor(Math.random() * 21);
  const [image, setImage] = useState(
    bannerImage[randomIndex] &&
      bannerImage[randomIndex].backdrop_path &&
      bannerImage[randomIndex].backdrop_path != null
      ? `https://image.tmdb.org/t/p/original${bannerImage[randomIndex].backdrop_path}`
      : fallbackImage
  );

  return (
    <div className="w-full h-64 rounded-md relative border-y-[1px] dark:border-y-white border-y-black  ">
      <Image
        src={typeof image !== "string" ? image.src : image}
        className="absolute object-center h-full w-full"
        width={100}
        height={100}
        alt={bannerImage[randomIndex].title}
        onError={() => setImage(fallbackImage)}
      />
    </div>
  );
};

export default FooterBanner;
