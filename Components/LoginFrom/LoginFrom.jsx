"use client";
import InputItem from "../InputItem/InputItem";

const LoginFrom = () => {
  return (
    <div className="flex flex-shrink-0 flex-col">
      <div>
        <InputItem />
        <InputItem />
      </div>
      <div className="flex justify-between font-Dosis font-thin text-md mt-3 ">
        <div className="flex gap-x-2">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Remember Me</label>
        </div>
        <span className="italic underline text-blue-700 cursor-pointer">Forgot password</span>
      </div>
      <div className="flex justify-center mt-2">
        <button className="w-full py-2 bg-blue-900 rounded-md mt-2 text-customWhite ">
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginFrom;
