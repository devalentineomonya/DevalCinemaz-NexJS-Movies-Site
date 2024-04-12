import SeasonCard from '@/Components/MovieCards/SeasonCard/SeasonCard'
import SeasonBanner from '@/Components/SeasonBanner/SeasonBanner'
import SeriesNavbar from '@/Components/SeriesNavbar/SeriesNavbar'
import React from 'react'

const page = () => {
  return (
    <div className='dark:bg-customDark bg-customWhite'>
      <SeriesNavbar />
      <SeasonBanner />
      <div className='flex flex-col '>
        <SeasonCard/>
        <SeasonCard/>
        <SeasonCard/>
        <SeasonCard/>
        <SeasonCard/>
        <SeasonCard/>
      </div>
    </div>
  )
}

export default page
