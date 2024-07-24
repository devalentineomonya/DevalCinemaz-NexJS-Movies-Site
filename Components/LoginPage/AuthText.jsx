import React from 'react'

const AuthText = ({login, setLogin}) => {
  return (
    <div className="flex justify-center items-center flex-col">
    <h1 className="font-bold text-4xl font-Dosis">Welcome Back !</h1>
    <p className="text-sm font-thin font-Inter mt-4">
      {login ? "Login to" : "Create"} your DevalCinemaz Account
    </p>
    <p className="text-sm font-thin font-Inter mt-1">
      {login ? "Don't " : "Already"} Have an account?
      <span
        className="underline text-sky-500 italic cursor-pointer"
        onClick={() => setLogin((prev) => !prev)}
      >
        {login ? "Create One !" : "Login Now"}
      </span>
    </p>
  </div>
  )
}

export default AuthText
