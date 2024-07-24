"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import testImage from "@/assets/testImage.jpg";
import { BsPlus } from "react-icons/bs";
import LoginFrom from "@/Components/LoginFrom/LoginFrom";
import RegistrationForm from "@/Components/RegistrationForm/RegistrationForm";
import Link from "next/link";
import LoginWithGoogle from "./LoginWithGoogle";
import AuthText from "./AuthText";
const LoginPage = () => {
  const [login, setLogin] = useState(true);
  const [formData, setFormData] = useState(
    login
      ? { email: "", password: "" }
      : { username: "", email: "", password: "" }
  );


  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
   
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validate (formData)
    if(Object.keys(validationError).length > 0){
      console.log(validationError)
    }
  };
  const validate = (formData) =>{
    let inputError = {}
    if(!formData?.username?.trim()){
inputError.username = "UserName is required!"
    }
    if(!formData?.email?.trim()){
      inputError.email = "Email Address is required!"
    }else if(!formData?.password?.trim()){
      inputError.password = "Password is Required"
    }
  }
  return (
    <>
      <div className="absolute w-full h-full top-0 bottom-0 bg-black bg-opacity-50"></div>
      <Image
        width={1}
        height={1}
        src={testImage}
        className="h-full w-full "
        alt="testImage"
      />
      <div className="w-full h-full flex justify-center items-center absolute top-0 pt-[65px]">
        <div className="w-[400px] h-fit bg-customWhite rounded-lg relative pt-7 pb-8 px-5 flex items-center justify-center">
          <Link href="/">
            <button className="absolute top-0 right-0 transform rotate-45">
              <BsPlus size={45} />
            </button>
          </Link>
          <div className="w-[90%] h-[90%] px-4 ">
            <AuthText login={login} setLogin={setLogin} />
            {login && <LoginWithGoogle />}
            <form
              onSubmit={handleSubmit}
              method="post"
              className={`overflow-hidden ${!login ? "mt-20" : null}`}
            >
              {login ? <LoginFrom onChange={onChangeHandler} value={formData} /> : <RegistrationForm />}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
