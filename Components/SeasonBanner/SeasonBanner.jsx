"use client"
import React, { useState } from "react";
import fallbackImage from "@/assets/fallbackImage.svg";
import { BsArrowReturnLeft } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const SeasonBanner = ({seriesData}) => {
  const [image, setImage] = useState(`https://image.tmdb.org/t/p/original${seriesData?.poster_path!=null &&  seriesData.poster_path}` || fallbackImage);

  return (
    
    <div className="w-full h-32 dark:bg-orange-700 bg-orange-500 flex justify-center items-center px-10 dark:text-customWhite text-customDark">
      <div className="w-full max-w-[1400px] flex flex-row h-full py-3 gap-x-4">
        <div className="w-16 overflow-hidden rounded-md">
              <Image layout="responsive"
        quality={100} width={1}  height={1} src={typeof(image) !== 'string' ? image.src : image}  className="h-full w-16"  alt={seriesData.name} onError={()=>{setImage(fallbackImage)}} />
        </div>
        <div className="w-full h-full ">
            <h1 className=" font-Arial text-4xl font-bold ">{seriesData.name}<span className="font-thin ">({new Date(seriesData.first_air_date).getFullYear()})</span></h1>
            <Link href={`/series/details/${seriesData.id}`}><button className="flex flex-row items-center gap-x-4 mt-3 font-Dosis text-xl font-semibold"><BsArrowReturnLeft/><span>Back to Main</span></button></Link>
        </div>
      </div>
    </div>
  );
};

export default SeasonBanner;
