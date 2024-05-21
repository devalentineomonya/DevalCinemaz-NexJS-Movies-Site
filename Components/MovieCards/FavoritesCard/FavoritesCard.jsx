import Image from "next/image";
import React from "react";
import testImage from "@/assets/testImage.jpg";
import { GoStar } from "react-icons/go";

const FavoritesCard = () => {
  return (
    <div className="flex flex-row shadow dark:bg-slate-900 dark:shadow-slate-700 bg-customWhite h-56 w-full rounded-xl overflow-hidden text-customDark dark:text-customWhite">
      <div className="min-w-40 h-full">
            <Image  width={1}  height={1}{1}={0} src={testImage} className="w-full h-full" />
      </div>
      <div className="flex flex-col py-3 pl-3 pr-5">
        <div>
          <h3 className="font-Dosis text-2xl font-semibold ">The follen</h3>
          <p className="text-sm font-Inter font-light mb-3">March 13th 2023</p>
        </div>
        <div>
          <p className="text-md font-Dosis font-semibold">
            Eiusmod aute commodo voluptate reprehenderit. Et officia mollit quis
            ex aliqua sint velit minim sunt et velit. Non ullamco et sint
            deserunt non ullamco aute amet do eiusmod aliquip. Eiusmod pariatur
            aute irure irure in incididunt officia. Sunt consequat anim elit
            eiusmod officia occaecat non quis do magna incididunt. Labore ut
            laborum aliqua veniam. Laboris occaecat elit do sit incididunt velit
            reprehenderit pariatur Lorem magna cillum reprehenderit est ea.
          </p>
        </div>
        <div className="flex items-center gap-x-4 flex-row mt-5">
          <div className="flex justify-start items-center flex-row gap-x-2">
            <div className="w-8 h-8 rounded-full flex justify-center items-center border dark:border-gray-300 border-gray-500 p-1">
              <GoStar/>
            </div>
            <p>Test Mess</p>
          </div>
          <div className="flex justify-start items-center flex-row gap-x-2">
            <div className="w-8 h-8 rounded-full flex justify-center items-center border dark:border-gray-300 border-gray-500 p-1">
              <GoStar/>
            </div>
            <p>Test Mess</p>
          </div>
          <div className="flex justify-start items-center flex-row gap-x-2">
            <div className="w-8 h-8 rounded-full flex justify-center items-center border dark:border-gray-300 border-gray-500 p-1">
              <GoStar/>
            </div>
            <p>Test Mess</p>
          </div>
          <div className="flex justify-start items-center flex-row gap-x-2">
            <div className="w-8 h-8 rounded-full flex justify-center items-center border dark:border-gray-300 border-gray-500 p-1">
              <GoStar/>
            </div>
            <p>Test Mess</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoritesCard;
