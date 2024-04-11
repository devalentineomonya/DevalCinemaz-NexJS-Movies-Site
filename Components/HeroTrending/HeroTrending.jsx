import Image from "next/image";
import React from "react";
import HeroTrendingButtons from "./HeroTrendingButtons/HeroTrendingButtons";
import testImage from "@/assets/testImage.jpg";
const HeroTrending = () => {
  return (
    <div className="w-full h-[70vh]  relative  cursor-default">
      <div className="absolute w-full h-full">
      <div className="bg-gradient-to-r dark:from-customDark dark:via-gray-800 dark:to-black h-full w-full absolute left-0 top-0 opacity-[0.7]"></div>
 <Image
          src={testImage}
          w={100}
          h={100}
          className="w-full h-full object-cover"
        />
        <div className=" w-[40%] h-[70%] absolute bottom-20 left-40 z-20">
          <p className="text-2xl font-bold">
            <span className="text-customGreen">Span</span>
            <span className="text-customWhite">Films</span>
          </p>
          <h1 className="font-extrabold text-8xl text-customWhite font-stencil m-0">
            TERMINATORS
          </h1>
          <p className="font-Inter text-2xl text-customWhite font-semibold">
            Dark Fate
          </p>
          <div className="flex flex-row gap-x-3 my-2">
            <p className="text-red-700 font-Inter text-2xl font-semibold">
              New
            </p>
            <p className="font-Inter text-2xl font-semibold text-customWhite">
              2023
            </p>
            <p className="font-Inter text-2xl font-semibold text-customWhite">
              1h 53Min
            </p>
            <div className="h-[40px] w-[50px] p-3 text-customWhite font-Inter font-semibold border-[1px] flex justify-center items-center rounded">
              5K
            </div>
            <div className="h-[40px] w-[50px] p-3 text-customWhite font-Inter font-semibold border-[1px] flex justify-center items-center rounded">
              5.1
            </div>
            <div className="h-[40px] w-[50px] p-3 text-customWhite font-Inter font-semibold  flex justify-center items-center rounded bg-gray-300">
              12
            </div>
          </div>
          <p className="text-customWhite my-2">
            Enim laboris quis irure incididunt aute velit et aute mollit non
            laboris et sint qui. Aliqua minim qui consequat aliquip cupidatat
            aliquip cillum amet. Nulla qui veniam proident ut ut incididunt eu
            sint esse do sunt. Ullamco tempor irure ad aliqua ad veniam id anim
            tempor.
          </p>
          <div className="flex items-center mt-3">
            <ul className="flex justify-center flex-row  text-customWhite text-lg font-semibold pl-5">
              <li className="list-disc mr-10">Action</li>
              <li className="list-disc mr-10">Drama</li>
              <li className="list-disc mr-10">Western</li>
            </ul>
          </div>
          <div className="mt-3 flex flex-row ">
            <HeroTrendingButtons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTrending;
