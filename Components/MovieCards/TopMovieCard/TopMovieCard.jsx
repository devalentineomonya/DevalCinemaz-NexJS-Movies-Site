import Image from "next/image";
import React from "react";
import testImage from "@/assets/testImage.jpg"
import styles from "./OutlineText.module.css";
import Link from "next/link";

const TopMovieCard = ({number, trendingMovie}) => {
  return (
    <Link  href={`/movies/details/${trendingMovie.id}`}>
    
    <div className="flex flex-row h-80 w-[380px] flex-shrink-0 dark:bg-customDark bg-gray-50 rounded-md overflow-hidden">
      <div className="w-[40%] mb-[30px] ">
        <div className="h-full w-full flex justify-start items-end"><span className={` dark:text-customWhite text-customDark font-sans ${styles.strokeText}`}>{number}</span></div>
      </div>
      <div className="w-[60%] bg-gray-400 relative rounded-md overflow-hidden">
        <Image src={`${process.env.IMAGE_URL}${trendingMovie.poster_path}`} className="absolute h-full w-full object-fill" width={100} height={100} alt={trendingMovie.original_title} />
      </div>
    </div>
    </Link>
  );
};

export default TopMovieCard;
