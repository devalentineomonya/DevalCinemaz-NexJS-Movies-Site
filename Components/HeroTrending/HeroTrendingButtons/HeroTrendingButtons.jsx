import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { GoTriangleRight } from "react-icons/go";
import { FaBookmark } from "react-icons/fa";
import { RiPlayListFill } from "react-icons/ri";
import { FaClock } from "react-icons/fa";

const HeroTrendingButtons = ({ setVideoPlaying, action, movieId = null }) => {
  const [activeToolTip, setActiveToolTip] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const router = useRouter();

  function handleClick() {
    if (action === "play") {
      setVideoPlaying(true);
    } else {
      router.push("/movies/details/" + movieId);
    }
  }

  function handleToolTip(itemName) {
    setActiveToolTip(itemName);
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
      <div
        className="flex justify-center items-center relative"
        onMouseEnter={() => {
          setShowMore(true);
        }}
      >
        <button className="flex items-center justify-center text-customDark  bg-gray-300 rounded-md py-4 px-5 ml-[10px] ">
          <BsFillInfoCircleFill />
        </button>
        {showMore && (
          <div
            className="flex px-2 py-1 w-44 h-12 justify-between items-center bg-slate-900 gap-x-4 absolute right-[-120px] bottom-[-60px]"
            onMouseLeave={() => {
              setShowMore(false);
            }}
          >
            <div
              className="w-full bg-slate-700 flex justify-center items-center h-full rounded-full relative flex-col"
              onMouseEnter={() => handleToolTip("bookmark")}
              onmouseleave={() => handleToolTip(null)}
            >
              <FaBookmark />
              {activeToolTip === "bookmark" && (
                <span className="absolute font-thin font-Dosis text-md italic text-customWhite whitespace-nowrap bottom-[-18px] left-2">
                  Bookmark
                </span>
              )}
            </div>
            <div
              className="w-full bg-slate-700 flex justify-center items-center h-full rounded-full relative flex-col "
              onMouseEnter={() => handleToolTip("playlist")}
              onmouseleave={() => handleToolTip(null)}
            >
              <RiPlayListFill />
              {activeToolTip === "playlist" && (
                <span className="absolute font-thin font-Dosis text-md italic text-customWhite whitespace-nowrap bottom-[-18px] left-2">
                  {" "}
                  Add to Playlist
                </span>
              )}
            </div>
            <div
              className="w-full bg-slate-700 flex justify-center items-center h-full rounded-full relative flex-col "
              onMouseEnter={() => handleToolTip("watchlater")}
              onmouseleave={() => handleToolTip(null)}
            >
              <FaClock />
              {activeToolTip === "watchlater" && (
                <span className="absolute font-thin font-Dosis text-md italic text-customWhite whitespace-nowrap bottom-[-18px] left-2">
                  {" "}
                  Watch later{" "}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HeroTrendingButtons;
