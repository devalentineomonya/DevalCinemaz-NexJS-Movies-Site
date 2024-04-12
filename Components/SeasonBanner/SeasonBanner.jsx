import Image from "next/image";
import React from "react";
import testImage from "@/assets/testImage.jpg";
import { BsArrowReturnLeft } from "react-icons/bs";

const SeasonBanner = () => {
  return (
    <div className="w-full h-32 dark:bg-orange-700 bg-orange-500 flex justify-center items-center px-10 dark:text-customWhite text-customDark">
      <div className="w-full max-w-[1400px] flex flex-row h-full py-3 gap-x-4">
        <div className="w-16 overflow-hidden rounded-md">
          <Image src={testImage} className="h-full w-16" />
        </div>
        <div className="w-full h-full ">
            <h1 className=" font-Arial text-4xl font-bold ">This the the title <span className="font-thin ">(2009)</span></h1>
            <button className="flex flex-row items-center gap-x-4 mt-3 font-Dosis text-xl font-semibold"><BsArrowReturnLeft/><span>Back to Main</span></button>
        </div>
      </div>
    </div>
  );
};

export default SeasonBanner;
