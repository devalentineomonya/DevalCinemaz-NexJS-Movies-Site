import React from "react";
const InputItem = ({ label, icon, ...rest }) => {
  return (
    <div className="flex flex-col w-full h-fit mt-2 ">
      <label htmlFor="">{label}</label>
      <div className="flex flex-row gap-x-2 items-center border border-gray-400 px-2 rounded-md mt-1">
        {icon}
        <input
          {...rest}
          className="w-full h-9 px-1 py-1  outline-none bg-transparent text-customDark placeholder:text-gray-600  text-sm"
        />
      </div>
    </div>
  );
};

export default InputItem;
