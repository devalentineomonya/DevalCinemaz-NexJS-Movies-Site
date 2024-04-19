import EpisodeSubNavbar from '@/Components/EpisodeSubNavbar/EpisodeSubNavbar'
import EpisodeCard from '@/Components/MovieCards/EpisodeCard/EpisodeCard'
import SeasonBanner from '@/Components/SeasonBanner/SeasonBanner'
import SeriesNavbar from '@/Components/SeriesNavbar/SeriesNavbar'


const page = () => {
  return (
    <div className='dark:bg-customDark bg-customWhite w-full text-customDark  dark:text-customWhite'>
      <SeriesNavbar pt="[65px]" h="[115px]"/>
      <SeasonBanner />
      <div className='flex flex-col w-full justify-center items-center'>
        <EpisodeSubNavbar/>
        <div className='flex justify-center w-full max-w-[1400px] flex-col'>
          <p className='w-full text-start my-4 font-semibold text-xl'>Eposides 9</p>
          <div className='flex justify-center w-full'>
            <EpisodeCard />
          </div>
        </div>
      </div>
    </div>

  )
}

export default page
