import MediaContainer from '@/Components/MediaContainer/MediaContainer';
import { getMediaPerCategory } from '@/app/Api/api';
const page = async ({searchParams }) => {
    const pageNumber = parseInt(searchParams.page) || 1;
  const validPageNumber = () => {
    if (searchParams) {
      if (!isNaN(pageNumber) || !pageNumber < 1) {
        return pageNumber

      } else {
        return 1
      }
    } else {
      return 1
    }
  }

 

  try {
    const movieData = await Promise.all([
      getMediaPerCategory("popular", "movie", validPageNumber() || 1),
    ]);
    const [moviesList] = movieData;

    return (
      <>
        <MediaContainer mediaType="movies" mediaList={moviesList} routeFilter="popular" pageNumber={pageNumber} />
      </>
    );
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};

export default page;
