"use client";
import Image from "next/image";
import React, { useState } from "react";
const FooterBanner = ({ bannerImage }) => {
  let randomIndex = Math.floor(Math.random() * 21);
  console.log(randomIndex);
  console.log(bannerImage[randomIndex]);
  const [image, setImage] = useState(
    bannerImage[randomIndex] && bannerImage[randomIndex].backdrop_path
      ? `https://image.tmdb.org/t/p/original${bannerImage[randomIndex].backdrop_path}`
      : fallbackImage
  );

  return (
    <div className="w-full h-64 rounded-md relative border-y-[1px] dark:border-y-white border-y-black  ">
      <Image
        src={image}
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
