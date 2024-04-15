import React from "react";

const MoviesDetailSmallSections = ({ children, title,mt=0 }) => {
  return (
    <div className={`w-full mt-${mt}`}>
      <h1 className="mb-3 text-xl text-customDark dark:text-customWhite font-semibold font-Inter ">
        {title}
      </h1>
      <div className="overflow-scroll flex flex-row gap-x-3  text-customDark dark:text-customWhite rounded-md w-full ">
        {children}
      </div>
    </div>
  );
};

export default MoviesDetailSmallSections;
