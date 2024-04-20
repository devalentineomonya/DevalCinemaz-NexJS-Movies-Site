import EpisodeSubNavbar from '@/Components/EpisodeSubNavbar/EpisodeSubNavbar'
import EpisodeCard from '@/Components/MovieCards/EpisodeCard/EpisodeCard'
import { getEpisodes } from '@/app/Api/api'
import NotFound from '@/app/movies/not-found'
import React from 'react'

const page = async ({ params }) => {
  const seriesId = params.seriesId
  const seasonNumber = params.seasonId

  if (isNaN(seriesId) || isNaN(seasonNumber)) {
    return <NotFound />
  }
  try {
    const seriesEpisodes = await Promise.all([
      getEpisodes(seriesId, seasonNumber)
    ])
    const [episodes] = seriesEpisodes

    return (
      <div className='pt-[65px] dark:bg-customDark bg-customWhite flex items-center flex-col'>
        <EpisodeSubNavbar />
        <div className='flex w-full flex-col items-center justify-start mb-4'>
          <div className='w-full max-w-[1400px]'>
            <h1 className="font-semibold font-Dosis text-3xl capitalize text-start text-customDark dark:text-customWhite">{episodes.length} Episodes</h1>
          </div>
        </div>
        <div className='flex flex-col  items-center w-full max-w-[1400px] '>
          {episodes && episodes.map((episode, i) => (
            <EpisodeCard key={i} episode={episode}/>
          ))}

        </div>
      </div>
    )
  } catch (error) {
    throw new Error("Error while fetching Series episodes", error.status)
  }

}

export default page
