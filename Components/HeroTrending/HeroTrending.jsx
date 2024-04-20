"use client";
import Image from "next/image";
import React from "react";
import HeroTrendingButtons from "./HeroTrendingButtons/HeroTrendingButtons";
import fallbackImage from "@/assets/fallbackImage.svg";
const HeroTrending = ({ setVideoPlaying, action, sliderMovie }) => {
  const movieTitle = sliderMovie.original_title || sliderMovie.name;
  const firstWord = movieTitle.split(" ")[0];
  const remainingWords = movieTitle.substring(firstWord.length).trim();

  function formatRuntime(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}Min`;
  }

  const year = new Date(sliderMovie.release_date).getFullYear();
  return (
    <div className="w-full h-[70vh]  relative  cursor-default">
      <div className="bg-gradient-to-r from-customDark via-gray-800 to-black h-full w-full absolute left-0 top-0 dark:opacity-[0.7] opacity-40"></div>
      <div className=" w-full h-full">
        <Image
          src={
            `https://image.tmdb.org/t/p/original${
              sliderMovie.backdrop_path != null && sliderMovie.backdrop_path
            }` || fallbackImage
          }
          className="w-full h-full object-cover"
          alt={sliderMovie.original_title || sliderMovie.name}
          width={100}
          height={100}
        />

        <div className=" w-[40%] h-[70%] absolute bottom-20 left-40 z-20">
          <p className="text-2xl font-bold">
            <span className="text-customGreen mr-3">TMDB</span>
            <span className="text-customWhite">Films</span>
          </p>
          <h1 className="font-extrabold text-6xl text-customWhite font-stencil m-0">
            {firstWord}
          </h1>
          <p className="font-Inter text-4xl text-customWhite font-semibold">
            {remainingWords}
          </p>

          <div className="flex flex-row gap-x-3 my-2">
            <p className="text-red-700 font-Inter text-2xl font-semibold">
              {sliderMovie.status || "New"}
            </p>
            <p className="font-Inter text-2xl font-semibold text-customWhite">
              {year}
            </p>
            <p className="font-Inter text-2xl font-semibold text-customWhite">
              {sliderMovie.runtime && formatRuntime(sliderMovie.runtime)}
            </p>
            <div className="h-[40px] w-[50px] p-3 text-customWhite font-Inter font-semibold border-[1px] flex justify-center items-center rounded">
              4K
            </div>
            <div className="h-[40px] w-[50px] p-3 text-customWhite font-Inter font-semibold border-[1px] flex justify-center items-center rounded">
              {sliderMovie.vote_average.toFixed(1)}
            </div>
            <div className="h-[40px] w-[50px] p-3 text-customDark font-Inter font-semibold  flex justify-center items-center rounded bg-gray-300">
              16+
            </div>
          </div>
          <p className="text-customWhite my-2">{sliderMovie.overview}</p>
          <div className="flex items-center mt-3">
            <ul className="flex justify-center flex-row  text-customWhite text-lg font-semibold pl-5">
              {sliderMovie.genres &&
                sliderMovie.genres.length > 0 &&
                sliderMovie.genres.map((genre) => (
                  <li className="list-disc mr-10" key={genre.id}>
                    {genre.name}
                  </li>
                ))}
            </ul>
          </div>
          <div className="mt-3 flex flex-row ">
            <HeroTrendingButtons
              setVideoPlaying={setVideoPlaying}
              action={action}
              movieId={sliderMovie.id}
              priority
            />
          </div>
        </div>
        {action === "play" ? (
          <div className="w-72 h-96 rounded-md z-20 absolute right-20 bottom-20 overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src={`https://image.tmdb.org/t/p/original${sliderMovie.poster_path}`}
              width={100}
              height={100}
              alt={sliderMovie.original_title || sliderMovie.name}
              priority
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default HeroTrending;
