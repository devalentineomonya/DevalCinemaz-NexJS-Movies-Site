"use client";
import { BsEnvelope } from "react-icons/bs";
import InputItem from "../InputItem/InputItem";

const LoginFrom = ({onChange, value}) => {
  return (
    <div className="flex flex-shrink-0 flex-col">
      <div>

        <InputItem icon={<BsEnvelope/>} label="Email" type="email" placeholder="Email / UserName" name="email" value={value.email} onChange={onChange} />
        <InputItem  icon={<BsEnvelope/>} label="Password" type="password" placeholder="Password" name="password" value={value.password} onChange={onChange} />
      </div>
      <div className="flex justify-between font-Dosis font-thin text-md mt-3 ">
        <div className="flex gap-x-2">
          <input type="checkbox" name="remember"/>
          <label htmlFor="">Remember Me</label>
        </div>
        <span className="italic underline text-blue-700 cursor-pointer">Forgot password</span>
      </div>
      <div className="flex justify-center mt-2 pb-4">
        <button className="w-full py-2 bg-blue-900 rounded-md mt-2  text-customWhite ">
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginFrom;
