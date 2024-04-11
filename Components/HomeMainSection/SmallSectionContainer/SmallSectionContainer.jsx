import React from "react";

const SmallSectionContainer = ({ children, title, viewMore }) => {
  return (
    <div className="w-full  max-w-[1400px] ">
      <div className={`flex  items-center my-10 ${viewMore ? "justify-between": "justify-start"} text-customWhite`}>
        <p className="font-semibold text-2xl cursor-default font-Inter">{title}</p>
        {viewMore && <button className="hover:text-customGreen transition-all ease-in-out duration-300 ">View More</button>}
      </div>
      <div className="flex flex-row  gap-x-5  mt-4 overflow-x-scroll overflow-y-hidden max-w-[1400px]">{children}</div>
    </div>
  );
};

export default SmallSectionContainer;
