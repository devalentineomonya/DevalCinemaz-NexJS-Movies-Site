
import SeriesNavbar from '@/Components/SeriesNavbar/SeriesNavbar'
import UserProfileBanner from '@/Components/UserProfileBanner/UserProfileBanner'
import React from 'react'

const page = ({ params }) => {

  return (
    <div className='pt-[65px] dark:bg-customDark bg-customWhite'>
        <UserProfileBanner />
        <SeriesNavbar py="3" />
        <div className='w-full border-t-[1px]'>

        </div>
    </div>
  )
}

export default page
