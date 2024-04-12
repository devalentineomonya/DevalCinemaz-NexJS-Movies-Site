import Image from "next/image";
import React from "react";
import testImage from "@/assets/testImage.jpg"
const PersonCard = ({width}) => {
  return (
    <div className={` h-96 flex flex-col shadow-md flex-shrink-0 dark:bg-gray-950 bg-slate-200 w-${width}`}>
      <div className="h-[90%] relative rounded-md overflow-hidden">
        <Image src={testImage} className="w-full h-full object-cover absolute" />
      </div>
      <div className="px-2 ">
        <p>Person Name</p>
        <p>
          <span>Movie 1</span>
          <span>Movie 1</span>
          <span>Movie 1</span>
          <span>Movie 1</span>
        </p>
      </div>
    </div>
  );
};

export default PersonCard;
