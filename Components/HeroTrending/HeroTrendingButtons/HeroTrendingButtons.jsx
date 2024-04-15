import { useRouter } from "next/navigation";
import React from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { GoTriangleRight } from "react-icons/go";


const HeroTrendingButtons = ({ setVideoPlaying, action, movieId = null }) => {
  const router = useRouter();

  function handleClick() {
    if (action === "play") {
      setVideoPlaying(true);
    } else {
      router.push("/movies/details/" +movieId );
    }
  }

  return (
    <>
      <button
        className="flex flex-row items-center justify-around text-customWhite  bg-customGreen rounded-md py-2 pr-7 pl-5 "
        onClick={handleClick}
      >
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
