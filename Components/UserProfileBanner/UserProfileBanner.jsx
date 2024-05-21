"use client";
import profileBannerLight from "@/assets/profileBannerLight.png";
import profileBannerDark from "@/assets/profileBannerDark.png";
import testImage from "@/assets/testImage.jpg";
import { useEffect, useState } from "react";
import Image from "next/image";
import useTheme from "@/hooks/useTheme";

const UserProfileBanner = () => {
  const [theme, setTheme, darkMode, setDarkMode] = useTheme();
  useEffect(() => {
    
  }, [theme, darkMode]);


  const bannerImage = darkMode ? profileBannerDark : profileBannerLight;

  return (
    <div className="w-full h-64 relative flex justify-center items-center ">
      <div className="absolute bg-gradient-to-tr from-black via-gray-900 to-gray-950 bg-opacity-50 top-0 bottom-0 w-full"></div>
          <Image  width={1}  height={1}
        src={bannerImage}
        className="w-full h-full absolute"
      />
      <div className="w-full max-w-[1400px]  h-56 z-30 flex items-center">
        <div className="flex flex-row gap-x-5 ">
           <div className="w-40 h-40 rounded-full overflow-hidden bg-sky-600 flex items-center justify-center font-Dosis">
            <h1 className="font-bold uppercase flex justify-center items-center text-6xl text-white">M</h1>
          </div>
          <div>
            <div className=" flex gap-x-3 flex-row items-center">
              <h1 className="font-bold text-4xl font-Arial text-customWhite">MartinNinjah</h1>
              <span className="text-xl font-Dosis text-gray-100">
                Member since march 2024
              </span>
            </div>
            <div className="flex flex-row mt-5 gap-x-3 py-3">
              <div className="flex flex-1 items-center  border-r-2 pr-3 px-2">
                <div className="w-20 h-20 rounded-full bg-gray-950 p-2">
                  <div className="w-full h-full rounded-full border-[6px] border-gray-600 flex justify-center items-center">
                    <p className="text-2xl font-Dosis font-semibold text-customWhite">87%</p>
                  </div>
                </div>
                <div className="text-md font-Dosis text-gray-100 ml-1">
                  <p>Average</p>
                  <p className="mt-2">Weekly watch hours</p>
                </div>
              </div>
              <div className="flex flex-1 items-center">
                <div className="w-20 h-20 rounded-full bg-gray-950 p-2">
                  <div className="w-full h-full rounded-full border-[6px] border-gray-600 flex justify-center items-center">
                    <p className="text-2xl font-Dosis font-semibold text-customWhite">87%</p>
                  </div>
                </div>
              <div className="text-md font-Dosis text-gray-100 ml-1">
                <p>Average</p>
                <p className="mt-2">Weekly watch hours</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileBanner;
