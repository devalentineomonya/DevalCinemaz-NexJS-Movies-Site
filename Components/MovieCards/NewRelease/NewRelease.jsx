import Image from "next/image";
import React from "react";
import { BsStarFill } from "react-icons/bs";
import testImage  from "@/assets/testImage.jpg"


const NewRelease = ({width}) => {
  return (
    <div className={`h-[380px] w-${width} rounded-md overflow-hidden dark:bg-gray-950 bg-slate-200 flex flex-col flex-shrink-0`}>
      <div className="h-[80%] relative">
        <Image src={testImage} className="absolute w-full h-full object-cover" />
      </div>
      <div className="flex justify-center items-center flex-col cursor-pointer"> 
        <p className="dark:text-customWhite text-customDark font-Inter font-semibold text-2xl">Movie Tittle</p>
        <div className="flex flex-row justify-between items-center w-36 ">
          <BsStarFill className="text-yellow-400" />
          <BsStarFill className="text-yellow-400" />
          <BsStarFill className="text-yellow-400" />
          <BsStarFill className="text-gray-400" />
          <BsStarFill className="text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default NewRelease;
