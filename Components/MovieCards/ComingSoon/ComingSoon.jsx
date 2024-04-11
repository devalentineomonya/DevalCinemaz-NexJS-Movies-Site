import Image from 'next/image'
import React from 'react'
import testImage from "@/assets/testImage.jpg";

const ComingSoon = () => {
  return (
    <div className='w-1/2 h-[400px] bg-green-300 relative rounded-md overflow-hidden'>
        <Image  src={testImage} className='relative w-full h-full object-cover '/>
      
    </div>
  )
}

export default ComingSoon
