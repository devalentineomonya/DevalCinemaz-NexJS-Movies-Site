"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import fallbackImage from "@/assets/fallbackImage.svg";
import Link from "next/link";

const ComingSoon = ({ upcomingMovie }) => {
  const [image, setImage] = useState(
    upcomingMovie && upcomingMovie.backdrop_path && upcomingMovie.backdrop_path !=null
      ? `https://image.tmdb.org/t/p/original${upcomingMovie.backdrop_path}`
      : fallbackImage
  );


  return (
    <div className="w-1/2 h-[400px] relative rounded-md overflow-hidden">
      <Link href={`/movies/details/${upcomingMovie.id}`}>
        <Image
          src={typeof(image) !== 'string' ? image.src : image} 
          className="relative w-full h-full object-cover"
          width={100}
          height={100}
          alt={upcomingMovie.original_title}
          onError={() => {
            setImage(fallbackImage);
          }}
        />
        <div className="absolute w-full bottom-0 left-0 h-48  text-customWhite bg-gradient-to-t from-slate-700 to-transparent flex justify-center items-end pb-3 text-4xl font-Inter font-semibold  ">
          {upcomingMovie.original_title}
        </div>
      </Link>
    </div>
  );
};

export default ComingSoon;
