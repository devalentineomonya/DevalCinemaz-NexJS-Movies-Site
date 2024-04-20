"use client";
import { useState } from "react";
import NewRelease from "../MovieCards/NewRelease/NewRelease";
import PersonCard from "../MovieCards/PersonCard/PersonCard";
import MovieInCategory from "../MovieCards/MovieInCategory/MovieInCategory";
import CompanyCard from "../MovieCards/CompanyCard/CompanyCard";


const SearchContainer = ({ moviesResults, peopleResults, seriesResults, companyResults , keyWordsResults}) => {

  const resultTypes = [
    { name: "Series", count: seriesResults.length },
    { name: "Movies", count: moviesResults.length },
    { name: "People", count: peopleResults.length },
    { name: "Companies", count: companyResults.length },
    { name: "Keywords", count: keyWordsResults.length },
  ];

  


  const [activePage, setActivePage] = useState("Series");

  const renderResults = () => {
    switch (activePage) {
      case "Movies":
        return moviesResults.length > 0 ? (
          
          moviesResults.map((movieItem, i) => (
            <NewRelease key={i} movieInfo={movieItem} width="64" type="movie" />
          ))
        ) : (
          <p>
            No Movie result for your search in this tab {moviesResults.length}
          </p>
        );
      case "Series":
        return seriesResults.length > 0 ? (
          seriesResults.map((seriesItem, i) => (
            <MovieInCategory

              key={i}
              seriesAiringTodayInfo={seriesItem}
              width="64"
              mediaType="series"
            />
          ))
        ) : (
          <p>
            No Series result for your search in this tab {seriesResults.length}
          </p>
        );
      case "People":
        return peopleResults.length > 0 ? (
          peopleResults.map((personItem, i) => (
            <PersonCard key={i} cast={personItem} width="64" />
          ))
        ) : (
          <p>
            No People result for your search in this tab {peopleResults.length}
          </p>
        );
 
      case "Companies":
        return companyResults.length > 0 ? (
          companyResults.map((companyItem, i) => (
            <CompanyCard key={i} mediaInfo={companyItem}/>
          ))
        ) : (
          <p>
            No People result for your search in this tab {peopleResults.length}
          </p>
        );
      case "Keywords":
        return keyWordsResults.length > 0 ? (
          keyWordsResults.map((wordItem, i) => (
            <p className="italic font-Dosis font-semibold text-xl" key={i}>{wordItem.name}</p>
          ))
        ) : (
          <p>
            No People result for your search in this tab {peopleResults.length}
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <div className="pt-[65px] dark:bg-customDark bg-customWhite dark:text-customWhite text-customDark flex justify-center">
      <div className="w-full max-w-[1400px] grid grid-cols-5 justify-center gap-x-2 mt-10">
        <div className="grid col-span-1 h-screen">
          <div className="w-full h-fit rounded-xl border overflow-hidden flex flex-col gap-y-[2px] pb-1 px-[2px]">
            <div className="dark:slate-700 dark:bg-slate-800 bg-slate-400 py-5">
              <h2>Results for </h2>
            </div>
            {resultTypes.map((resultType) => (
              <div
                className={`dark:hover:bg-slate-500 hover:bg-slate-200 peer-hover:bg-customWhite transition-all duration-200 ease-in-out flex justify-between py-2 cursor-pointer rounded-md ${activePage === resultType.name ? "dark:bg-slate-500 bg-slate-200" : null}`}
                onClick={() => setActivePage(resultType.name)}
                key={resultType.name}
              >
                <p>{resultType.name}</p>
                <div className="py-[2px] px-6 rounded-full bg-slate-200 text-customDark">
                  {resultType.count === 20 ? resultType.count + "+" : resultType.count}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid col-span-4 h-fit pb-10 grid-cols-4 gap-x-2 gap-y-4">
          {renderResults()}
        </div>
      </div>
    </div>
  );
};

export default SearchContainer;
