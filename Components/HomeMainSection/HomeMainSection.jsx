import React from "react";
import SmallSectionContainer from "./SmallSectionContainer/SmallSectionContainer";
import TopMovieCard from "../MovieCards/TopMovieCard/TopMovieCard";
import ComingSoon from "../MovieCards/ComingSoon/ComingSoon";

const HomeMainSection = () => {
  return (
    <main className="dark:bg-customDark bg-customWhite w-full flex justify-center mt-9 h-fit pb-20">
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
      </div>
    </main>
  );
};

export default HomeMainSection;
