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
      className={` h-10 bg-gray-800 flex justify-start items-center rounded-full ${
        searching ? "w-full  pl-10 pr-5" : "w-[0%]"
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
          } outline-none border-none bg-transparent text-customWhite placeholder:text-gray-400 `}
        />
        {searching && <button className="text-xl text-customWhite" type="submit"><GoSearch/></button>}
      </form>
    </div>
  );
};

export default SearchForm;
