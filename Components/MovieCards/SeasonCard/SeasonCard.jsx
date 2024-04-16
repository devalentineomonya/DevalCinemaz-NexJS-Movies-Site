"use client";
import Image from "next/image";
import React, { useState } from "react";
import fallbackImage from "@/assets/fallbackImage.svg";
import { RiStarFill } from "react-icons/ri";
import Link from "next/link";

const SeasonCard = ({ season, number, seriesId }) => {
  const [image, setImage] = useState(
    `https://image.tmdb.org/t/p/original${
      (season && season.poster_path) || fallbackImage
    }`
  );

  return (
    <Link href={`/series/details/${seriesId}/seasons/${season.season_number}`}>
    <div className="w-full border-b-[1px] pb-4 pt-2 mt-2  dark:border-gray-300 border-gray-500 h-48 flex justify-center text-customDark dark:text-customWhite cursor-pointer hover:scale-[1.02] transition-all ease-in-out duration-300">
      <div className="w-full max-w-[1400px] flex justify-center items-center h-full gap-x-4">
        <div className=" w-28 h-full rounded-md overflow-hidden">
          <Image
            src={image}
            className="h-full w-full"
            width={100}
            height={100}
            alt={season.name}
            onError={() => {
              setImage(fallbackImage);
            }}
          />
        </div>
        <div className="w-full h-full">
          <p className="font-bold  text-xl mb-2">Season {number} </p>
          <div className=" flex flex-row">
            <div className="px-2 rounded-md bg-cyan-400 text-customDark  w-[60px] flex flex-row items-center justify-between font-semibold  ">
              <RiStarFill size={18} />
              <span className="text-sm">{season.vote_average * 10}%</span>
            </div>
            <div className="font-semibold text-sm  ml-2">
              <span>{new Date(season.air_date).getFullYear()}</span>. <span>{season.episode_count} episodes</span>
            </div>
          </div>
          <p className="text-sm font-thin italic mt-5">{season.name}</p>
          <p className="mt-3 text-md font-Dosis font-light">
            {season.overview}
          </p>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default SeasonCard;
