// NavItem.js
import Link from "next/link";
import React, { useRef } from "react";

const NavItem = ({ searching, tab, isActive, lastItem }) => {
  const subMenuRef = useRef(null);

  // No need for `setActiveTab` here (passed from Navbar)

  const handleSubMenuToggle = () => {
    if (!searching) {
      // Only toggle if not searching
      subMenuRef.current.classList.toggle("hidden"); // Toggle visibility directly
    }
  };

  return (
    <div className="relative ml-[20px] ">
      <div
        className={` pr-[20px] mr-[10px]  cursor-pointer flex justify-between items-center  border-slate-600 ${
          tab.id === lastItem ? null : "border-r-[1px]"
        } ${searching ? "hidden" : null}`}
        onClick={handleSubMenuToggle}
      >
        {tab.name}
      </div>
      {tab.subMenu.length > 0 && (
        <div
          ref={subMenuRef}
          className={`absolute top-[30px] w-[172px] bg-customWhite dark:bg-customDark dark:text-customWhite text-customDark shadow-md rounded  pt-4 hidden ${
            isActive && !searching ? "" : "hidden" // Show only if active and not searching
          } `}
        >
          {tab.subMenu.map((menu, i) => (
            <Link
              key={i}
              href={`/${
                tab.id === 3
                  ? "user"
                  : tab.name.toLowerCase().replaceAll(" ", "-")
              }/${tab.id === 4 ? "" : menu.toLowerCase().replaceAll(" ", "-")}`}
            >
              <div className="text-[14px] px-3 cursor-pointer dark:hover:bg-gray-800 hover:bg-gray-100 p-1 rounded ">
                {" "}
                {menu}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavItem;
