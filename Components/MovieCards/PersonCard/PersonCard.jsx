"use client"
import Image from "next/image";
import React, { useState } from "react";
import fallbackImage from "@/assets/fallbackImage.svg";
const PersonCard = ({ width, cast }) => {
  const [image, setImage] = useState(`https://image.tmdb.org/t/p/original${cast.profile_path}`)
  return (
    <div
      className={` h-96 flex flex-col shadow-md flex-shrink-0 dark:bg-gray-950 bg-slate-200 w-${width}`}
    >
      <div className="h-[90%] relative rounded-md overflow-hidden">
        <Image
          src={image}
          className="w-full h-full object-cover absolute"
          width={100}
          height={100}
          onError={() => {
            setImage(fallbackImage);
          }}
        />
      </div>
      <div className="px-2 ">
        <p>{cast.name}</p>
        <p>
         <span className="text-red-600">as</span> {cast.character}
        </p>
      </div>
    </div>
  );
};

export default PersonCard;
