"use Client";

import { useEffect, useRef } from "react";
import { GoSearch } from "react-icons/go";

const SearchForm = ({ searching }) => {
    const searchInput = useRef(null)
    useEffect(()=>{
        if (searching){
            searchInput.current.focus();
        }
    },[searching])
  return (
    <div
      className={` h-10  dark:bg-zinc-900 bg-zinc-100 flex justify-start items-center rounded-full ${
        searching ? "w-full  pl-10 pr-0" : "w-[0%]"
      }`}
    >
      <form action="" className="w-full flex justify-between">
        <input 
        ref ={searchInput}
          type="text"
          name=""
          id=""
          placeholder="Type to search Movies or Series"
          className={`${
            searching ? "w-full" : "w-[0%]"
          } outline-none border-none bg-transparent dark:text-customWhite text-customDark placeholder:text-gray-400 `}
        />
        {searching && <button className="text-xl dark:text-customWhite text-customDark w-[100px] pr-4 py-1 rounded-full dark:bg-sky-700 bg-cyan-500 flex justify-end items-center" type="submit">Search</button>}
      </form>
    </div>
  );
};

export default SearchForm;
