"use client";
import Image from "next/image";
import React, { useState } from "react";
import fallbackImage from "@/assets/fallbackImage.svg";
import Link from "next/link";
const PersonCard = ({ width, cast }) => {

  const [image, setImage] = useState(
    `https://image.tmdb.org/t/p/original${cast.profile_path!=null && cast.profile_path}`
  );
  return (
    <div
      className={` h-96 flex flex-col shadow-[2px_5px_28px_3px_rgba(204,204,204,0.65)] flex-shrink-0 dark:bg-gray-950 bg-slate-200 w-${width}`}
    >
      <div className="h-[87%] relative rounded-md overflow-hidden">
      <Link href={`/people/details/${cast.id}`}>
            <Image  width={1}  height={1}{1}={0}
         src={typeof(image) !== 'string' ? image.src : image} 
          className="w-full h-full object-cover absolute"
         
          onError={() => {
            setImage(fallbackImage);
          }}
          alt={cast.character}
        />
      </Link>
      </div>
      
      <div className="px-2 ">
        <p>{cast.name}</p>
        <div>
          {cast.character && (
            <>
              <span className="text-red-600">as </span>
              {cast.character}
            </>
          )}
          {cast.known_for && (
            <ul className="flex flex-wrap gap-x-2 gap-y-2">
              {cast.known_for.map((movie, index) => (
                <li key={index} className="text-sm font-Dosis font-thin italic">
                  {movie.original_title || movie.name || "Not Given"}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
