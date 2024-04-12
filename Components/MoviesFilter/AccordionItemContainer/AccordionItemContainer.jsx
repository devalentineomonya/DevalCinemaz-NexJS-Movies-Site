"use client";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { TECollapse } from "tw-elements-react";
const AccordionItemContainer = ({ children, title, mt }) => {
  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };
  return (
    <div className={`rounded-md shadow-sm shadow-gray-400 dark:shadow-slate-800 dark:bg-[#1b1a1c] bg-customWhite transition-all ease-in-out duration-300 ${mt}`}>
      <h2
        className="mb-0 border-b-[1px] dark:border-gray-500 px-1 "
        id="headingOne"
      >
        <button
          className={`group relative flex w-full items-center border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none text-customDark dark:text-customWhite `}
          type="button"
          onClick={() => handleClick("element1")}
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          {title}
          <BsChevronDown
            className={`${
              activeElement === "element1"
                ? `rotate-[-180deg] -mr-1`
                : `rotate-0 fill-[#212529]  dark:fill-white`
            } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-300 ease-in-out motion-reduce:transition-none dark:fill-blue-300 `}
          />
        </button>
      </h2>
      <TECollapse
        show={activeElement === "element1"}
        className="!mt-0 !rounded-b-none !shadow-none transition-all ease-in-out duration-300"
      >
        {children}
      </TECollapse>
    </div>
  );
};

export default AccordionItemContainer;
