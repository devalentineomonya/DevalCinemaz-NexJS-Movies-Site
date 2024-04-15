"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import testImage from "@/assets/testImage.jpg"
import { BsPlus } from 'react-icons/bs'
import LoginFrom from '@/Components/LoginFrom/LoginFrom'
import RegistrationForm from '@/Components/RegistrationForm/RegistrationForm'
import Link from 'next/link'

const page = () => {
    const [login, setLogin] = useState(true)
    return (
        <div className='dark:bg-customDark bg-customWhite pt-[65px] h-[75vh] relative'>
            <div className='absolute w-full h-full top-0 bottom-0 bg-black bg-opacity-50'></div>
            <Image src={testImage} className='h-full w-full ' />
            <div className='w-full h-full flex justify-center items-center absolute top-0 pt-[65px]'>
                <div className="w-[400px] h-[65vh] bg-customWhite rounded-lg relative py-5 px-5 flex items-center justify-center">
                    <Link href="/"><button className='absolute top-0 right-0 transform rotate-45'><BsPlus size={45} /></button></Link>
                    <div className='w-[90%] h-[90%] px-4'>
                        <div className='flex justify-center items-center flex-col'>
                            <h1 className='font-bold text-4xl font-Dosis'>Welcome Back !</h1>
                            <p className='text-sm font-thin font-Inter mt-4'> {login ? "Login to" : "Create"} your DevalCinemaz Account</p>
                            <p className='text-sm font-thin font-Inter mt-1'>{login ? "Don't " : "Already"} Have an account? <span className='underline text-sky-500 italic cursor-pointer' onClick={() => setLogin(prev => !prev)}>{login ? "Create One !" : "Login Now"}</span></p>
                        </div>
                        {login &&

                            <div className='flex flex-col justify-center mt-10'>
                                <p className='font-thin font-Dosis text-md  text-center'>Login to your account using</p>
                                <div className='flex justify-center mt-1'>
                                    <button className='w-full py-2 bg-gray-200 rounded-md mt-2'>Google</button>
                                </div>
                                <div className='flex flex-row pt-4 justify-center items-center '><span className='flex flex-1 h-[2px] w-full bg-customDark mr-2'></span> or <span className='flex flex-1 h-[2px]  w-full bg-customDark ml-2'></span></div>
                            </div>
                        }
                        <form action="" method="post" className={`overflow-hidden ${!login ? "mt-20" : null}`}>
                            {login ? <LoginFrom /> : <RegistrationForm />}


                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default page

