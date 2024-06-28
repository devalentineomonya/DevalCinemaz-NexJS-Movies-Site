import React from "react";
import NewRelease from "../MovieCards/NewRelease/NewRelease";
import MoviesFilter from "../MoviesFilter/MoviesFilter";

import PageNavigationButtons from "../PageNavigationButtons/PageNavigationButtons";

const MediaContainer = ({ mediaList, routeFilter, pageNumber, mediaType}) => {

  return (
    <main className="pt-[65px] dark:bg-customDark flex justify-center">
      <div className="flex  flex-col justify-start items-start max-w-[1400px] w-full pt-12">
        <h1 className="dark:text-customWhite text-customDark text-2xl font-semibold  font-Inter">
          DevalCinemaz Top Movies{" "}
        </h1>
        <div className="flex flex-row gap-x-4  pt-4 w-full ">
          
          <div className="w-[380px] list">
            <MoviesFilter />
          </div>

          <div className="w-full grid xl:grid-cols-5 lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 sm:justify-around gap-x-3  gap-y-6  flex-wrap text-customDark dark:text-customWhite">
            {mediaList?.map((movieInfo, i) => (
                <NewRelease key={i} movieInfo={movieInfo} width="full" type={mediaType} />
              ))}
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
         <PageNavigationButtons pageNumber={pageNumber} routeFilter={routeFilter} mediaType={mediaType}/>
        </div>
      </div>
    </main>
  );
};

export default MediaContainer;
