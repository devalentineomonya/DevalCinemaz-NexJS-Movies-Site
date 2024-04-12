import React from "react";
import NewRelease from "../MovieCards/NewRelease/NewRelease";
import MoviesFilter from "../MoviesFilter/MoviesFilter";

const MediaContainer = () => {
  return (
    <main className="pt-[65px] dark:bg-customDark flex justify-center">
      <div className="flex  flex-col justify-start items-start max-w-[1400px] w-full pt-12">
        <h1 className="dark:text-customWhite text-customDark text-2xl font-semibold  font-Inter">
          DevalCinemaz Top Movies{" "}
        </h1>
        <div className="flex flex-row gap-x-4  pt-4 ">
          <div className="w-[380px] list">
            <MoviesFilter/>
          </div>
          <div className="w-full h-fit flex  flex-wrap justify-center gap-x-4 gap-y-4 ">
            <NewRelease width="w-64" />
            <NewRelease width="w-64" />
            <NewRelease width="w-64" />
            <NewRelease width="w-64" />
            <NewRelease width="w-64" />
            <NewRelease width="w-64" />
            <NewRelease width="w-64" />
            <NewRelease width="w-64" />
            <NewRelease width="w-64" />
            <NewRelease width="w-64" />
            <NewRelease width="w-64" />
            <NewRelease width="w-64" />
            <NewRelease width="w-64" />
            <NewRelease width="w-64" />
            <NewRelease width="w-64" />
            <NewRelease width="w-64" />
            <NewRelease width="w-64" />
            <NewRelease width="w-64" />
            <NewRelease width="w-64" />
            <NewRelease width="w-64" />
            <NewRelease width="w-64" />
            <NewRelease width="w-64" />
            <NewRelease width="w-64" />
            <NewRelease width="w-64" />
            <NewRelease width="w-64" />
            <NewRelease width="w-64" />
            <NewRelease width="w-64" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MediaContainer;
