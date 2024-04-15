"use client";
import React, { useState } from "react";
import PersonCard from "../MovieCards/PersonCard/PersonCard";
import HeroTrending from "../HeroTrending/HeroTrending";
import AccordionItemContainer from "../MoviesFilter/AccordionItemContainer/AccordionItemContainer";
import ReviewCard from "../MovieCards/ReviewCard/ReviewCard";
import SmallSectionContainer from "../HomeMainSection/SmallSectionContainer/SmallSectionContainer";
import ComingSoon from "../MovieCards/ComingSoon/ComingSoon";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import MoviesDetailSmallSections from "../MoviesDetailSmallSections/MoviesDetailSmallSections";
import NewRelease from "../MovieCards/NewRelease/NewRelease";
const MediaDetailsContainer = ({
  movieInfo,
  videoInfo,
  castList,
  movieReviews,
  recommendedMovies,
}) => {
  console.log(recommendedMovies);
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <main className="w-full flex items-center flex-col">
      <HeroTrending
        setVideoPlaying={setVideoPlaying}
        action="play"
        sliderMovie={movieInfo}
      />

      <div className="w-full max-w-[1400px] flex flex-col items-center">
        <MoviesDetailSmallSections title="Movies Cast List" mt="5">
          {castList.map((cast, i) => (
            <PersonCard width="56" key={i} cast={cast} />
          ))}
        </MoviesDetailSmallSections>

        <MoviesDetailSmallSections title="User reviews" mt="5">
          <AccordionItemContainer title="Movie Reviews" mt="5">
            {movieReviews.length &&
              movieReviews.map((review, i) => (
                <ReviewCard key={i} review={review} />
              ))}
          </AccordionItemContainer>
        </MoviesDetailSmallSections>
        <MoviesDetailSmallSections title="Recommended Movies" mt="6">
          {recommendedMovies &&
            recommendedMovies.length > 0 &&
            recommendedMovies.map((recommendedMovie, i) => (
              <NewRelease
                width="56"
                key={i}
                movieInfo={recommendedMovie}
              />
            ))}
        </MoviesDetailSmallSections>
        <MoviesDetailSmallSections title="Similar Movies" mt="8">
          <NewRelease width="56" />
          <NewRelease width="56" />
          <NewRelease width="56" />
          <NewRelease width="56" />
          <NewRelease width="56" />
          <NewRelease width="56" />
          <NewRelease width="56" />
          <NewRelease width="56" />
          <NewRelease width="56" />
          <NewRelease width="56" />
          <NewRelease width="56" />
        </MoviesDetailSmallSections>
      </div>

      <SmallSectionContainer title="Coming soon">
        <ComingSoon />
        <ComingSoon />
      </SmallSectionContainer>
      <VideoPlayer
        videoPlaying={videoPlaying}
        setVideoPlaying={setVideoPlaying}
        videoInfo={videoInfo}
      />
    </main>
  );
};

export default MediaDetailsContainer;
