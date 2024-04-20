import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const EpisodeSubNavbar = () => {
  return (
    <div className="w-full h-7 bg-customWhite dark:bg-customDark flex justify-center dark:text-customWhite text-customDark my-2">
      <div className="w-full max-w-[1400px] flex justify-between items-center px-4  py-3">
        <button  className="flex justify-between items-center">
          <BsArrowLeft />
          Previous Season
        </button>
        <button className="flex justify-between items-center">
            Next Season
          <BsArrowRight />
        </button>
      </div>
    </div>
  );
};

export default EpisodeSubNavbar;
