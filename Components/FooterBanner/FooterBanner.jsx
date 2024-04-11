import Image from 'next/image'
import React from 'react'
import textImage from "@/assets/testImage.jpg"

const FooterBanner = () => {
  return (
    <div className='w-full h-64 rounded-md relative border-y-[1px] dark:border-y-white border-y-black  '>
      <Image src={textImage} className='absolute object-cover h-full w-full'/>
    </div>
  )
}

export default FooterBanner
