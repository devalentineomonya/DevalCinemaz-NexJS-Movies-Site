"use client";
import InputItem from "../InputItem/InputItem";

const RegistrationForm = () => {
  return (
    <>
      <div>
        <InputItem />
        <InputItem />
        <InputItem />
      </div>
      <div className="flex justify-start font-Dosis font-thin text-md mt-3 flex-shrink-0">
        <div className="flex gap-x-2">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Agree terms and conditions</label>
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <button className="w-full py-2 bg-blue-900 rounded-md mt-2 text-customWhite ">
          Register
        </button>
      </div>
    </>
  );
};

export default RegistrationForm;
