import Image from 'next/image'
import React from 'react'
import testImage from "@/assets/testImage.jpg";

const GuestStart = () => {
  return (
    <div className="h-fit w-56 flex flex-row gap-x-2 shadow-md dark:shadow-gray-400 shadow-slate-300 rounded-xl ">
        <div className="w-16 h-20  rounded-xl overflow-hidden ">
            <Image src={testImage} className='h-full w-full'/>
        </div>
      <div className='flex justify-center flex-col'>
        <p className="text-xl font-Dosis font-semibold">Guest Name</p>
        <p className='text-md font-Dosis font-thin '>Guest Role</p>
      </div>
    </div>
  )
}

export default GuestStart
