import React from "react";

const SeriesNavbar = ({ pt = 0, h, py=0 }) => {
  return (
    <div
      className={`w-full dark:bg-customDark bg-customWhite h-${h} pt-${pt}}`}
    >
      <div className={`w-full h-full dark:bg-gray-500 bg-gray-300 flex justify-center items-center flex-row gap-x-4 py-${py}`}>
        <button className="dark:text-customWhite text-customDark font-Dosis font-semibold text-xl hover:text-customGreen">
          Seasons
        </button>
        <button className="dark:text-customWhite text-customDark font-Dosis font-semibold text-xl hover:text-customGreen">
          Seasons
        </button>
        <button className="dark:text-customWhite text-customDark font-Dosis font-semibold text-xl hover:text-customGreen">
          Seasons
        </button>
        <button className="dark:text-customWhite text-customDark font-Dosis font-semibold text-xl hover:text-customGreen">
          Seasons
        </button>
      </div>
    </div>
  );
};

export default SeriesNavbar;
