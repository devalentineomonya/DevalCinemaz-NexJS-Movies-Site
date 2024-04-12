import Image from "next/image";
import React from "react";
import testImage from "@/assets/testImage.jpg";
const ReviewCard = () => {
  return (
    <div className="mt-7  rounded-md shadow-2xl dark:shadow-slate-500 px-4 py-3 w-full h-56 dark:text-customWhite text-customDark">
      <div className="grid grid-cols-12 h-20 gap-x-2 items-center">
        <div className="grid col-span-1  rounded-full overflow-hidden w-[60px]  h-[60px]">
          <Image src={testImage} className="w-full  h-full" />
        </div>
        <div className="grid col-span-11 w-full h-full justify-start items-start ">
          <p className="font-thin text-sm">Featured Review</p>
          <p className="text-xl font-semibold ">A review by John Doe</p>
          <div className="flex flex-row justify-start items-center pt-2">
            <div className="px-2 text-customWhite w-[60px] flex justify-center items-center rounded-xl dark:bg-customGreen bg-green-600 ">
              100%
            </div>
            <p className="pl-3 font-thin text-sm">
              Written by <span className="font-bold">John Doe</span> on fri 30th 2023
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 text-lg font-Dosis ">
        <p>
          Dolor occaecat sunt et aliqua minim ad id duis dolore ipsum. Veniam et
          sunt magna ad deserunt occaecat. Nulla irure sit eiusmod quis est esse
          id sunt amet voluptate cupidatat cupidatat. Lorem aliqua aliqua aliqua
          duis laborum minim cillum minim esse. Velit ea amet laboris ipsum.
          Aliquip enim ut nostrud enim qui dolore ea cillum.
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
