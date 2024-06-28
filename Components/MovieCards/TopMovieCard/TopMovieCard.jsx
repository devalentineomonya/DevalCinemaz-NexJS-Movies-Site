"use client"
import Image from "next/image";
import React, { useState } from "react";
import styles from "./OutlineText.module.css";
import Link from "next/link";
import fallbackImage from "@/assets/fallbackImage.svg";

const TopMovieCard = ({number, trendingMovie}) => {
  const [image, setImage] = useState(`https://image.tmdb.org/t/p/original${ trendingMovie?.backdrop_path!=null && trendingMovie.backdrop_path }` || fallbackImage)
  return (
    <Link  href={`/movies/details/${trendingMovie.id}`}>
    
    <div className="flex flex-row h-80 w-[380px] flex-shrink-0 dark:bg-customDark bg-gray-50 rounded-md overflow-hidden">
      <div className="w-[40%] mb-[30px] ">
        <div className="h-full w-full flex justify-start items-end"><span className={` dark:text-customWhite text-customDark font-sans ${styles.strokeText}`}>{number}</span></div>
      </div>
      <div className="w-[60%] bg-gray-400 relative rounded-md overflow-hidden">
            <Image  width={1}  height={1} src={image} className="absolute h-full w-full object-fill" alt={trendingMovie.original_title} onError={()=>{setImage(fallbackImage)}} />
      </div>
    </div>
    </Link>
  );
};

export default TopMovieCard;
