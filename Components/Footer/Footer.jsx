import React from "react";

const Footer = () => {
  const navItems = [
    {
      id: 1,
      name: "Movies",
      navItem: ["Popular", "Now Playing", "Up Coming", "Top Rated"],
    },
    {
      id: 2,
      name: "Series",
      navItem: ["Popular", "Airing Today", "On TV", "Top Rated"],
    },
    {
      id: 3,
      name: "People",
      navItem: ["Popular", "Most Liked", "Top Contributor", "Top Votes"],
    },
    {
      id: 4,
      name: "My Profile",
      navItem: ["Favorite", "Playlist", "Suggestions", "Continue Watching"],
    },
  ];
  return (
    <div className="h-[300px] w-full dark:bg-customDark bg-customWhite flex justify-center items-center ">
      <div className="max-w-[1400px]  px-10  w-full flex flex-row justify-center  items-center gap-x-14 pl-12">
        {navItems.map((navItem, i) => (
          <div className="flex flex-col w-[150px]" key={i}>
            <p className="dark:text-customWhite text-customDark font-semibold text-xl border-b-2 dark:border-white w-full border-black text-center">
              {navItem.name}
            </p>
            <ul className="flex flex-col gap-y-5 mt-8">
              {navItem.navItem.map((Item, i) => (
                <li className="dark:text-customWhite text-customDark hover:text-customGreen  transition-all ease-in-out duration-300 cursor-pointer font-semibold" key={i}>
                  {Item}
                </li>
              ))}
            </ul>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Footer;
