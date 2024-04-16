"use client";
import Image from "next/image";
import { BsStarFill } from "react-icons/bs";
import fallbackImage from "@/assets/fallbackImage.svg";
import { useState } from "react";
import Link from "next/link";

const NewRelease = ({ width, movieInfo, type="Movie" }) => {
  const [image, setImage] = useState(`https://image.tmdb.org/t/p/original${ movieInfo && movieInfo.poster_path || fallbackImage}`);

  return (
    <Link href={`/${type.toLowerCase()==="movie" ? "movies": type.toLowerCase()}/details/${movieInfo && movieInfo.id}`}>
     <div
      className={`h-[380px] w-${width} rounded-md overflow-hidden dark:bg-gray-950 bg-slate-200 flex flex-col flex-shrink-0`}
    >
      <div className="h-[80%] relative">
        <Image
          src={image}
          className="absolute w-full h-full object-cover"
          onError={() => {
            setImage(fallbackImage);
          }}
          width={100}
          height={100}
          alt={movieInfo && movieInfo.original_title || movieInfo && movieInfo.name }
        />
      </div>
      <div className="flex justify-center items-center flex-col cursor-pointer">
        <p className="dark:text-customWhite text-customDark font-Inter font-semibold text-2xl whitespace-nowrap overflow-hidden text-ellipsis px-2">
          {movieInfo &&  movieInfo.original_title || movieInfo && movieInfo.name  }
        </p>
        <div className="flex flex-row justify-between items-center w-36">
          {[...Array(10)].map((_, index) => (
            <BsStarFill
              key={index}
              className={
                index < Math.round(movieInfo &&  movieInfo.vote_average || 0)
                  ? "text-yellow-400"
                  : "text-gray-400"
              }
            />
          ))}
        </div>
      </div>
    </div>
    </Link>
   
  );
};

export default NewRelease;
