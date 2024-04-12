import Image from "next/image";
import React from "react";
import testImage from "@/assets/testImage.jpg";
import { RiStarFill } from "react-icons/ri";
const SeasonCard = () => {
  return (
    <div className="w-full border-b-[1px] pb-4 pt-2 mt-2  dark:border-gray-300 border-gray-500 h-48 flex justify-center text-customDark dark:text-customWhite cursor-pointer hover:scale-[1.02] transition-all ease-in-out duration-300">
      <div className="w-full max-w-[1400px] flex justify-center items-center h-full gap-x-4">
        <div className=" w-28 h-full rounded-md overflow-hidden">
          <Image src={testImage} className="h-full w-full" />
        </div>
        <div className="w-full h-full">
          <p className="font-bold  text-xl mb-2">Season 1 </p>
          <div className=" flex flex-row">
            <div className="px-2 rounded-md bg-cyan-400 text-customDark  w-[60px] flex flex-row items-center justify-between font-semibold  ">
              <RiStarFill size={18} />
              <span className="text-sm">50%</span>
            </div>
            <div className="font-semibold text-sm  ml-2">
              <span>2009</span>. <span>9 episodes</span>
            </div>
          </div>
          <p className="text-sm font-thin italic mt-5">
            Season 1 if moviesName{" "}
          </p>
          <p  className="mt-3 text-md font-Dosis font-light">
            Reprehenderit eiusmod excepteur elit enim occaecat nisi non officia.
            Veniam veniam elit sint incididunt dolor eu labore magna. Eiusmod
            voluptate laborum commodo dolor nisi excepteur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SeasonCard;
