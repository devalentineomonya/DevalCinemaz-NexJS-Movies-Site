
import FavoritesCard from '@/Components/MovieCards/FavoritesCard/FavoritesCard'
import SeriesNavbar from '@/Components/SeriesNavbar/SeriesNavbar'
import UserProfileBanner from '@/Components/UserProfileBanner/UserProfileBanner'


const page = ({ params }) => {

  return (
    <div className='pt-[65px] dark:bg-customDark bg-customWhite'>
      <UserProfileBanner />
      <SeriesNavbar py="3" />
      <div className='w-full border-t-[1px] flex justify-center '>
        <div className='max-w-[1400px] w-full mt-6 flex justify-center flex-col'>
          <h1 className='font-Inter dark:text-customWhite text-customDark font-bold text-xl mb-5 '>This is the sorted version</h1>
          <div className='flex flex-col gap-y-5'>
          <FavoritesCard />
          <FavoritesCard />
          <FavoritesCard />
          <FavoritesCard />
          <FavoritesCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
