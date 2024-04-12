"use client"
import React, { useState } from "react";
import PersonCard from "../MovieCards/PersonCard/PersonCard";
import HeroTrending from "../HeroTrending/HeroTrending";
import AccordionItemContainer from "../MoviesFilter/AccordionItemContainer/AccordionItemContainer";
import ReviewCard from "../MovieCards/ReviewCard/ReviewCard";
import SmallSectionContainer from "../HomeMainSection/SmallSectionContainer/SmallSectionContainer";
import ComingSoon from "../MovieCards/ComingSoon/ComingSoon";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

const MediaDetailsContainer = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  return (
    <>
      <HeroTrending setVideoPlaying={setVideoPlaying} action="play"/>
      <main className="flex justify-center w-full relative bg-customWhite dark:bg-customDark">
        <div className="flex  flex-col justify-start items-start max-w-[1400px] w-full pt-12">
          <div className="flex xl:flex-row gap-x-4  pt-4  justify-center items-start max-w-[1400px] w-full flex-col-reverse ">
            <div>
              <h1 className="mb-3 text-xl text-customDark dark:text-customWhite font-semibold font-Inter ">
                Top Contributor
              </h1>
              <div className="overflow-scroll flex flex-row gap-x-3  text-customDark dark:text-customWhite rounded-md ">
                <PersonCard width="56" />
                <PersonCard width="56" />
                <PersonCard width="56" />
                <PersonCard width="56" />
                <PersonCard width="56" />
                <PersonCard width="56" />
                <PersonCard width="56" />
                <PersonCard width="56" />
                <PersonCard width="56" />
                <PersonCard width="56" />
              </div>
              <div className="mt-10 ">
              <h1 className="mt-5 mb-5 text-xl text-customDark dark:text-customWhite font-semibold font-Inter ">
                    Revies
                  </h1>
                <AccordionItemContainer title="Reviews" px="10">
                  <ReviewCard />
                </AccordionItemContainer>
                <div>
                  <h1 className="mt-5 text-xl text-customDark dark:text-customWhite font-semibold font-Inter ">
                    Top Contributor
                  </h1>
                  <div className="overflow-scroll flex flex-row gap-x-3  text-customDark dark:text-customWhite rounded-md mt-5 ">
                    <PersonCard width="56" />
                    <PersonCard width="56" />
                    <PersonCard width="56" />
                    <PersonCard width="56" />
                    <PersonCard width="56" />
                    <PersonCard width="56" />
                    <PersonCard width="56" />
                    <PersonCard width="56" />
                    <PersonCard width="56" />
                    <PersonCard width="56" />
                  </div>
                </div>
                <div>
                  <h1 className="mt-5 text-xl text-customDark dark:text-customWhite font-semibold font-Inter ">
                    Top Contributor
                  </h1>
                  <div className="overflow-scroll flex flex-row gap-x-3  text-customDark dark:text-customWhite rounded-md mt-5 ">
                    <PersonCard width="56" />
                    <PersonCard width="56" />
                    <PersonCard width="56" />
                    <PersonCard width="56" />
                    <PersonCard width="56" />
                    <PersonCard width="56" />
                    <PersonCard width="56" />
                    <PersonCard width="56" />
                    <PersonCard width="56" />
                    <PersonCard width="56" />
                  </div>
                </div>
              </div>
            </div>
            <div className="min-w-[320px] bg-red-300 h-screen"></div>
          </div>
          <SmallSectionContainer>
            <ComingSoon/>
            <ComingSoon/>
          </SmallSectionContainer>
        </div>
        <VideoPlayer videoPlaying={videoPlaying} setVideoPlaying={setVideoPlaying}/>
      </main>
    </>
  );
};

export default MediaDetailsContainer;
