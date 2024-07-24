import React from "react";

const LoginWithGoogle = () => {
  return (
    <div className="flex flex-col justify-center mt-10">
      <p className="font-thin font-Dosis text-md  text-center">
        Login to your account using
      </p>
      <div className="flex justify-center mt-1">
        <button className="w-full py-2 bg-gray-200 rounded-md mt-2">
          Google
        </button>
      </div>
      <div className="flex flex-row pt-4 justify-center items-center ">
        <span className="flex flex-1 h-[2px] w-full bg-customDark mr-2"></span>
        or
        <span className="flex flex-1 h-[2px]  w-full bg-customDark ml-2"></span>
      </div>
    </div>
  );
};

export default LoginWithGoogle;
