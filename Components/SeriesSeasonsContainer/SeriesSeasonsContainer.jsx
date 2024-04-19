import SeasonCard from '../MovieCards/SeasonCard/SeasonCard'

const SeriesSeasonsContainer = ({seriesData, seriesId}) => {
   
  return (
    <div className='flex flex-col '>
          {
            seriesData && seriesData.seasons.map((season, i) => (
              <SeasonCard key={i} season={season} number={i+1} seriesId={seriesId}  seriesData={seriesData}/>
            ))
          }

        </div>
  )
}

export default SeriesSeasonsContainer
