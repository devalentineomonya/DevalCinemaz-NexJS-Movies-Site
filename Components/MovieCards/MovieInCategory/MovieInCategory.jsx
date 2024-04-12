import Image from "next/image";
import React from "react";
import testImage from "@/assets/testImage.jpg";
const MovieInCategory = () => {
  return (
    <div className=" h-[420px] w-72 rounded-md overflow-hidden dark:bg-gray-950 bg-slate-200 flex flex-col flex-shrink-0">
      <div className="h-[85%] relative">
        <Image
          src={testImage}
          className="absolute w-full h-full object-cover"
        />
      </div>
      <div className="flex justify-center items-center flex-col cursor-pointer">
        <p className="dark:text-customWhite text-customDark font-Inter font-semibold text-md mt-2">
          Movie Tittle
        </p>
        <p className="dark:text-customWhite text-customDark font-Inter font-semibold text-md mt-2">
         Category
        </p>
        <p className="dark:text-customWhite text-customDark font-Inter font-semibold text-md">
          2010
        </p>
      </div>
    </div>
  );
};

export default MovieInCategory;
