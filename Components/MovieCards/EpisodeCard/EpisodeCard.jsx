"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { TECollapse } from "tw-elements-react";
import fallbackImage from "@/assets/fallbackImage.svg"
import { RiStarFill } from "react-icons/ri";
import GuestStart from "@/Components/GuestStart/GuestStart";
const EpisodeCard = ({ episode }) => {
  const [active, setActive] = useState("");
  const [image, setImage] = useState(
    `https://image.tmdb.org/t/p/original${
      episode &&
      episode.still_path &&
      episode.still_path != null &&
      episode.still_path
    }` || fallbackImage
  );

  const handleClick = (value) => {
    if (value === active) {
      setActive("");
    } else {
      setActive(value);
    }
  };

  function formatRuntime(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}Min`;
  }

  return (
    <div
      className={`mb-4 cursor-pointer w-full overflow-hidden rounded-md shadow-[2px_5px_28px_3px_rgba(204,204,204,0.65)] dark:shadow-[2px_5px_28px_-18px_rgba(204,204,204,0.65)]  shadow-[2px_5px_28px_-7px_rgba(204,204,204,0.65)]ray-400 dark:dark:shadow-[2px_5px_28px_-18px_rgba(204,204,204,0.65)]  shadow-[2px_5px_28px_-7px_rgba(204,204,204,0.65)]ray-400 dark:bg-[#1b1a1c] bg-customWhite transition-all ease-in-out duration-300`}
    >
      <div className="mb-0 border-b-[1px] dark:border-gray-500 px-1 ">
        <div
          className={`group relative flex w-full items-center justify-between border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none text-customDark dark:text-customWhite `}
          type="button"
          onClick={() => handleClick(episode.id)}
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <div className="flex flex-row gap-x-4">
            <div className="w-[180px]  rounded-md overflow-hidden">
                  <Image  width={1}  height={1}
                src={image}
                className="w-full h-full"
                alt={`${episode && episode.name}` || "Name not found"}
              
                onError={() => setImage(fallbackImage)}
              />
            </div>
            <div className="overflow-hidden">
              <p className="text-customDark dark:text-customWhite mb-3">
                {episode.episode_number} {episode.name}
              </p>
              <div className="flex flex-row items-center">
                <div className="rounded-md bg-cyan-400 text-customDark  w-[112px] flex flex-row justify-between font-semibold overflow-hidden dark:border-[0px] border-[1px] border-black ">
                  <div className="flex flex-row items-center border-r-[1px] dark:bg-customDark bg-customWhite pl-1 dark:text-customWhite text-customDark">
                    <RiStarFill size={18} />
                    <span className="text-sm ml-1">
                      {Math.round(episode.vote_average * 10, 1)} %
                    </span>
                  </div>
                  <div className="pr-2 h-full">
                    <span className="text-sm ">Rate It</span>
                  </div>
                </div>
                <p className="text-sm  font-thin ml-4">
                  February 2, 2009 . {formatRuntime(episode.runtime)}
                </p>
              </div>
              <p className="text-md font-Dosis mt-3 ">
                {episode && episode.overview}
              </p>
            </div>
          </div>
          <div className="w-[60px] flex justify-center items-center">
            <BsChevronDown
              className={`${
                active === episode.id
                  ? `rotate-[-180deg] -mr-1`
                  : `rotate-0 fill-[#212529]  dark:fill-white`
              } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-300 ease-in-out motion-reduce:transition-none dark:fill-blue-300 `}
            />
          </div>
        </div>
      </div>
      <TECollapse
        show={active === episode.id}
        className={`!mt-0 !rounded-b-none !shadow-none transition-all ease-in-out duration-300 pb-2 `}
      >
        <div className="flex flex-col justify-center items-center">
          <p className="w-3/4 my-3 text-customDark dark:text-customWhite font-Dosis font-semibold text-3xl">Guest Starts</p>
          <div className="flex justify-center w-full">
            <div className="w-3/4 flex flex-row items-start justify-start flex-wrap gap-x-4 gap-y-6">
              {episode &&
                episode.guest_stars.length > 0 &&
                episode.guest_stars.map((guestStar, i) => <GuestStart guestStar={guestStar} key={i}/>)}
            </div>
          </div>
        </div>
      </TECollapse>
    </div>
  );
};

export default EpisodeCard;
