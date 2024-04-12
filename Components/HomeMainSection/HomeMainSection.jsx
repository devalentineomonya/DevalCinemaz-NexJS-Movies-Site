import React from "react";
import SmallSectionContainer from "./SmallSectionContainer/SmallSectionContainer";
import TopMovieCard from "../MovieCards/TopMovieCard/TopMovieCard";
import ComingSoon from "../MovieCards/ComingSoon/ComingSoon";
import TrendingMovies from "../MovieCards/TrendingMovies/TrendingMovies";
import NewRelease from "../MovieCards/NewRelease/NewRelease";
import MovieInCategory from "../MovieCards/MovieInCategory/MovieInCategory";



const HomeMainSection = () => {
  return (
    <main className="dark:bg-customDark bg-customWhite w-full flex justify-center  h-fit pb-20">
      <div className="max-w-[1400px]  px-10 pt-10 w-full flex flex-col ">
        <SmallSectionContainer title="This is a dynamic title">
          <TopMovieCard />
          <TopMovieCard />
          <TopMovieCard />
          <TopMovieCard />
          <TopMovieCard />
          <TopMovieCard />
          <TopMovieCard />
          <TopMovieCard />
          <TopMovieCard />
          <TopMovieCard />
        </SmallSectionContainer>
        <SmallSectionContainer title="This is a dynamic title" viewMore={true}>
          <ComingSoon />
          <ComingSoon />
        </SmallSectionContainer>
        <SmallSectionContainer title="This is a dynamic title" viewMore={true}>
          <TrendingMovies />
          <TrendingMovies />
          <TrendingMovies />
          <TrendingMovies />
          <TrendingMovies />
          <TrendingMovies />
          <TrendingMovies />
          <TrendingMovies />
          <TrendingMovies />
        </SmallSectionContainer>
        <SmallSectionContainer title="This is a dynamic title" viewMore={true}>
          <TrendingMovies />
          <TrendingMovies />
          <TrendingMovies />
          <TrendingMovies />
          <TrendingMovies />
          <TrendingMovies />
          <TrendingMovies />
          <TrendingMovies />
          <TrendingMovies />
        </SmallSectionContainer>
        <SmallSectionContainer title="This is a dynamic title" viewMore={true}>
          <NewRelease width="72"/>
          <NewRelease width="72"/>
          <NewRelease width="72"/>
          <NewRelease width="72"/>
          <NewRelease width="72"/>
          <NewRelease width="72"/>
          <NewRelease width="72"/>
          <NewRelease width="72"/>
          <NewRelease width="72"/>
          <NewRelease width="72"/>
        </SmallSectionContainer>
        <SmallSectionContainer title="This is a dynamic title" viewMore={true}>
          <MovieInCategory />
          <MovieInCategory />
          <MovieInCategory />
          <MovieInCategory />
          <MovieInCategory />
          <MovieInCategory />
          <MovieInCategory />
          <MovieInCategory />
          <MovieInCategory />
          <MovieInCategory />
        </SmallSectionContainer>

      </div>
    </main>
  );
};

export default HomeMainSection;
