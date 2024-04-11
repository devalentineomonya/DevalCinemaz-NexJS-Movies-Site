import React from "react";
import { GoTriangleRight } from "react-icons/go";
import { BsFillInfoCircleFill } from "react-icons/bs";

const HeroTrendingButtons = () => {
  return (
    <>
      <button className="flex flex-row items-center justify-around text-customWhite  bg-customGreen rounded-md py-2 pr-7 pl-5 ">
        <GoTriangleRight size={28} />
        <span>Play</span>
      </button>
      <button className="flex items-center justify-center text-customWhite  bg-gray-300 rounded-md py-2 px-5 ml-[10px] ">
      <BsFillInfoCircleFill />
      </button>
    </>
  );
};

export default HeroTrendingButtons;
