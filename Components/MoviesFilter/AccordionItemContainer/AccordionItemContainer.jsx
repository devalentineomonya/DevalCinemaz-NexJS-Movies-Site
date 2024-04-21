"use client";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { TECollapse } from "tw-elements-react";
const AccordionItemContainer = ({ children, title, mt, px }) => {
  const [active, setActive] = useState("");

  const handleClick = (value) => {
    if (value === active) {
      setActive("");
    } else {
      setActive(value);
    }
  };
  return (
    <div className={`overflow-hidden rounded-md shadow-[2px_5px_28px_3px_rgba(204,204,204,0.65)] dark:shadow-[2px_5px_28px_-18px_rgba(204,204,204,0.65)]  shadow-[2px_5px_28px_-7px_rgba(204,204,204,0.65)]ray-400 dark:dark:shadow-[2px_5px_28px_-18px_rgba(204,204,204,0.65)]  shadow-[2px_5px_28px_-7px_rgba(204,204,204,0.65)]ray-400 dark:bg-[#1b1a1c] bg-customWhite transition-all ease-in-out duration-300  w-full ${mt}`}>
      <h2
        className="mb-0 border-b-[1px] dark:border-gray-500 px-1 "
        id="headingOne"
      >
        <button
          className={`group relative flex w-full items-center border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none text-customDark dark:text-customWhite `}
          type="button"
          onClick={() => handleClick("open")}
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          {title}
          <BsChevronDown
            className={`${
              active === "open"
                ? `rotate-[-180deg] -mr-1`
                : `rotate-0 fill-[#212529]  dark:fill-white`
            } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-300 ease-in-out motion-reduce:transition-none dark:fill-blue-300 `}
          />
        </button>
      </h2>
      <TECollapse
        show={active === "open"}
        className={`!mt-0 !rounded-b-none !shadow-none transition-all ease-in-out duration-300 pb-2 px-${px}`}
      >
        {children}
      </TECollapse>
    </div>
  );
};

export default AccordionItemContainer;
