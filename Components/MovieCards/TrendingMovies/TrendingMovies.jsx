"use client";
import React, { useState } from "react";
import Image from "next/image";
import fallbackImage from "@/assets/fallbackImage.svg";
import Link from "next/link";

const TrendingMovies = ({ mediaInfo, mediaType }) => {
  const [mouseHover, setMouseHover] = useState(false);

  const [image, setImage] = useState(
    `https://image.tmdb.org/t/p/original${
      (mediaInfo && mediaInfo.poster_path) || fallbackImage
    }`
  );

  return (
    <div
      className="w-72 h-96 flex flex-shrink-0 relative overflow-hidden rounded-md dark:bg-gray-950 bg-slate-200 "
      onMouseEnter={() => setMouseHover(true)}
      onMouseLeave={() => setMouseHover(false)}
    >
      <Link href={`/${mediaType}/details/${mediaInfo && mediaInfo.id}`}>
        <Image
          src={image}
          className="absolute w-full h-full object-cover"
          alt={mediaInfo && mediaInfo.original_title || mediaInfo && mediaInfo.name}
          onError={() => {
            setImage(fallbackImage);
          }}
          width={100}
          height={100}
        />
        <div
          className={`absolute bg-gradient-to-t from-gray-700 to-transparent w-full h-1/2 flex justify-start items-end pl-4 pb-6 cursor-pointer  transition-all ease-in-out duration-300  ${
            mouseHover ? "bottom-0 " : "bottom-[-300px]"
          }`}
        >
          <p className="text-customWhite font-semibold font-Dosis text-2xl">
            {mediaInfo && mediaInfo.original_title  || mediaInfo && mediaInfo.name}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default TrendingMovies;
