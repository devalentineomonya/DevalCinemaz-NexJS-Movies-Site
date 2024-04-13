"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { TECollapse } from "tw-elements-react";
import testImage from "@/assets/testImage.jpg";
import { RiStarFill } from "react-icons/ri";
import GuestStart from "@/Components/GuestStart/GuestStart";
const EpisodeCard = () => {
  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };
  return (
    <div
      className={`cursor-pointer w-full overflow-hidden rounded-md shadow-sm shadow-gray-400 dark:shadow-gray-400 dark:bg-[#1b1a1c] bg-customWhite transition-all ease-in-out duration-300`}
    >
      <h2
        className="mb-0 border-b-[1px] dark:border-gray-500 px-1 "
        id="headingOne"
      >
        <div
          className={`group relative flex w-full items-center justify-between border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none text-customDark dark:text-customWhite `}
          type="button"
          onClick={() => handleClick("element1")}
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <div className="flex flex-row gap-x-4">
            <div className="w-[250px]  rounded-md overflow-hidden">
              <Image src={testImage} className="w-full h-full" />
            </div>
            <div>
              <p className="text-customDark dark:text-customWhite mb-3">
                1 Drag me to hell
              </p>
              <div className="flex flex-row items-center">
                <div className="rounded-md bg-cyan-400 text-customDark  w-[112px] flex flex-row justify-between font-semibold overflow-hidden dark:border-[0px] border-[1px] border-black ">
                  <div className="flex flex-row items-center border-r-[1px] dark:bg-customDark bg-customWhite pl-1 dark:text-customWhite text-customDark">
                    <RiStarFill size={18} />
                    <span className="text-sm ml-1">50%</span>
                  </div>
                  <div className="pr-2 h-full">
                    <span className="text-sm ">Rate It</span>
                  </div>
                </div>
                <p className="text-sm  font-thin ml-4">
                  February 2, 2009 . 44min
                </p>
              </div>
              <p className="text-md font-Dosis mt-3 ">
                Id sint laboris magna incididunt excepteur. Velit nulla magna
                irure tempor elit consectetur pariatur. Quis id labore Lorem ut
                cillum minim dolor dolor. Incididunt ex dolor irure veniam
                tempor commodo officia proident. Mollit sit sunt enim dolore
                aute.
              </p>
            </div>
          </div>
          <div className="w-[60px] flex justify-center items-center">
            <BsChevronDown
              className={`${
                activeElement === "element1"
                  ? `rotate-[-180deg] -mr-1`
                  : `rotate-0 fill-[#212529]  dark:fill-white`
              } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-300 ease-in-out motion-reduce:transition-none dark:fill-blue-300 `}
            />
          </div>
        </div>
      </h2>
      <TECollapse
        show={activeElement === "element1"}
        className={`!mt-0 !rounded-b-none !shadow-none transition-all ease-in-out duration-300 pb-2 `}
      >
        <div className="flex flex-col justify-center items-center">
          <p className="w-3/4">Guest Starts</p>
          <div className="flex justify-center">
            <div className="w-3/4 flex flex-row items-center justify-center flex-wrap gap-x-4 gap-y-6">
              <GuestStart />
              <GuestStart />
              <GuestStart />
              <GuestStart />
              <GuestStart />
              <GuestStart />
              <GuestStart />
            </div>
          </div>
        </div>
      </TECollapse>
    </div>
  );
};

export default EpisodeCard;
