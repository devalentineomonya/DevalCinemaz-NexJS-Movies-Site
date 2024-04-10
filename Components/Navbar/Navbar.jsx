"use client";
import React, { useState } from "react";
import { GoBell } from "react-icons/go";
import { RiUserAddLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import SearchForm from "./SearchForm/SearchForm/SearchForm";
import NavItem from "./NavItem/NavItem";

const Navbar = () => {
  const [searching, setSearching] = useState(false);
  const [activeTab, setActiveTab] = useState(null);


  const tabs = [
    {
      id: 1,
      name: "Movies",
      subMenu: ["Popular", "Now Playing", "UpComing", "Top Rated"],
    },
    {
      id: 2,
      name: "Series",
      subMenu: ["Popular", "Airing Today", "On TV", " Top Rated"],
    },
    {
      id: 3,
      name: "People",
      subMenu: ["Popular"],
    },
    {
      id: 4,
      name: "My History",
      subMenu: ["Favorites", "PLayList", "Suggestions", "Continue Watching"],
    },
  ];

  return (
    <div className="w-full h-16 dark:bg-customDark bg-customWhite fixed top-0 flex justify-center items-center ">
      <div className="w-full max-w-[1400px]  flex justify-between items-center">
        <div className="w-fit">
          <h1 className="font-caveats text-customGreen bg-clip-text text-transparent bg-gradient-to-r from-customGreen via-customWhite to-customOrange-300 font-semibold text-4xl pl-10">
            DevalCinemaz
          </h1>
        </div>

        <nav
          className={`flex justify-center items-center relative transition-all ease-in-out duration-300 ${
            searching ? "w-[0%] hidden " : "w-full"
          } `}
        >
          <ul className="flex flex-row justify-between items-center">
            {tabs.map((tab) => (
             <li key={tab.id}>
             <NavItem
               searching={searching}
               tab={tab}
               isActive={activeTab === tab.id} // Pass `isActive` prop
               onMouseEnter={() => handleHover(tab.id)}
               onMouseLeave={handleMouseLeave}
             />
           </li>
            ))}
          </ul>
        </nav>
        <div
          className={` mx-5 transition-all ease-in-out duration-300 ${
            searching ? "w-full" : "w-[0%]"
          }`}
        >
          <SearchForm searching={searching} />
        </div>
        <div className="flex justify-between w-fit pr-5">
          <div
            className="text-customWhite mr-5 cursor-pointer hover:text-customOrange-300 transition-all ease-in-out duration-300"
            onClick={() => setSearching((prev) => !prev)}
          >
            <IoSearchOutline size={18} />
          </div>
          <div className="text-customWhite mr-5 cursor-pointer hover:text-customOrange-300 transition-all ease-in-out duration-300">
            <RiUserAddLine size={18} />
          </div>
          <div className="text-customWhite mr-5 cursor-pointer hover:text-customOrange-300 transition-all ease-in-out duration-300">
            <GoBell size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
