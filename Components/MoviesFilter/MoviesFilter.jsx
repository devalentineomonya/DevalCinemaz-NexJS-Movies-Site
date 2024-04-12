"use client";
import React, { useRef, useState } from "react";
import AccordionItemContainer from "./AccordionItemContainer/AccordionItemContainer";

const MoviesFilter = () => {
  const [votesRange, setVotesRange] = useState(0);
  const [runTime, setRunTime] = useState(0);
  const handleVotesRange = (event) => {
    setVotesRange(event.target.value);
  };
  const handleRunTime = (event) => {
    setRunTime(event.target.value);
  };

  return (
    <div>
      <form action="" method="get">
        <AccordionItemContainer title="Range">
          <div className="flex flex-col py-3 px-2">
            <span className=" dark:text-customWhite text-customDark">
              User Voted
            </span>
            <input
              type="range"
              id=""
              min={0}
              max={1000}
              step={10}
              defaultValue={0}
              onChange={handleVotesRange}
              name="userVotes"
            />
            <div className="w-full flex justify-center">
              <p className=" dark:text-customWhite text-customDark flex justify-between w-[80%]">
                <span className="border-[1px] mt-[5px] px-2 w-[50px] flex justify-center items-center rounded">
                  0
                </span>{" "}
                <span className="border-[1px] mt-[5px] px-2 w-[50px] flex justify-center items-center rounded">
                  {votesRange}
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-col py-3 px-2">
            <span className=" dark:text-customWhite text-customDark">
              RunTime
            </span>
            <input
              type="range"
              name="runTime"
              id=""
              min={0}
              max={5}
              step={1}
              defaultValue={0}
              onChange={handleRunTime}
            />
            <div className="w-full flex justify-center">
              <p className=" dark:text-customWhite text-customDark flex justify-between w-[80%]">
                <span className="border-[1px] mt-[5px] px-2 w-[50px] flex justify-center items-center rounded">
                  0Hs
                </span>{" "}
                <span className="border-[1px] mt-[5px] px-2 w-[50px] flex justify-center items-center rounded">
                  {runTime}Hs
                </span>
              </p>
            </div>
          </div>
        </AccordionItemContainer>
        <AccordionItemContainer title="Show Me" mt={"mt-5"}>
          <div className="flex flex-col py-3 px-2 ">
            <div className="mb-1">
              <input
                type="radio"
                name="myHistory"
                id=""
                className="text-blue-500 mr-3"
              />
              <label
                htmlFor=""
                className="dark:text-customWhite text-customDark"
              >
                Everything
              </label>
            </div>
            <div className="mb-1">
              <input
                type="radio"
                name="myHistory"
                id=""
                className="text-blue-500 mr-3"
              />
              <label
                htmlFor=""
                className="dark:text-customWhite text-customDark"
              >
                What i have't watch
              </label>
            </div>
            <div className="mb-1">
              <input
                type="radio"
                name="myHistory"
                id=""
                className="text-blue-500 mr-3"
              />
              <label
                htmlFor=""
                className="dark:text-customWhite text-customDark"
              >
                What i have watch
              </label>
            </div>
            <div className="mb-1">
              <input
                type="checkbox"
                name="availability"
                id=""
                className="text-blue-500 mr-3"
              />
              <label
                htmlFor=""
                className="dark:text-customWhite text-customDark"
              >
                All Availability?
              </label>
            </div>
          </div>
        </AccordionItemContainer>
        <AccordionItemContainer title="Release Date" mt={"mt-5"}>
          <div className="flex flex-col py-3 px-2 ">
            <div className="mb-1">
              <input
                type="checkbox"
                name=""
                id=""
                className="text-blue-500 mr-3"
              />
              <label
                htmlFor=""
                className="dark:text-customWhite text-customDark"
              >
                All Release Date?
              </label>
            </div>
            <div className="flex justify-center items-center flex-col text-customDark dark:text-customWhite">
              <div className="flex gap-x-5 items-center mt-3">
                <label htmlFor="">From</label>
                <input
                  type="date"
                  name="dateFrom"
                  id=""
                  className="w-full rounded h-[35px] px-1 bg-transparent border-[1px] dark:border-customWhite border-customDark text-customDark dark:text-customWhite"
                />
              </div>
              <div className="flex gap-x-10 items-center mt-3">
                <label htmlFor="">To</label>
                <input
                  type="date"
                  name="dateTo"
                  id=""
                  className="w-full rounded h-[35px] px-1 bg-transparent border-[1px] dark:border-customWhite border-customDark text-customDark dark:text-customWhite"
                />
              </div>
            </div>
          </div>
        </AccordionItemContainer>
        <AccordionItemContainer title="Genre" mt={"mt-5"}>
          <div className="flex flex-row flex-wrap gap-x-2 gap-y-3  py-3 px-2 dark:text-customWhite text-customDark">
            <button className="px-4 py-1 border-2 rounded-full">Genre</button>
            <button className="px-4 py-1 border-2 rounded-full">Genre</button>
            <button className="px-4 py-1 border-2 rounded-full">Genre</button>
            <button className="px-4 py-1 border-2 rounded-full">Genre</button>
            <button className="px-4 py-1 border-2 rounded-full">Genre</button>
            <button className="px-4 py-1 border-2 rounded-full">Genre</button>
            <button className="px-4 py-1 border-2 rounded-full">Genre</button>
          </div>
        </AccordionItemContainer>
        <div className="w-full flex justify-center items-center mt-5">
            <button type="submit" className="py-2 px-5 w-full  bg-purple-900 text-customWhite rounded-full">Search</button>
        </div>
      </form>
    </div>
  );
};

export default MoviesFilter;
