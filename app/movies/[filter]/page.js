import MediaContainer from '@/Components/MediaContainer/MediaContainer';
import React from 'react';
import { getMediaPerCategory } from '@/app/Api/api';
import NotFound from '../not-found';

const page = async ({ params, searchParams }) => {
  const routeFilter = (params.filter).toString().replaceAll("-", "_");

  const pageNumber = parseInt(searchParams.page)
  const validPageNumber = searchParams && !isNaN(pageNumber) && pageNumber > 0 ? 1 : pageNumber;
  
  const possibleRoutes = ["now_playing", "upcoming", "popular", "top_rated"];

  if (!possibleRoutes.includes(routeFilter)) {
    return <NotFound />;
  }

  try {
    const movieData = await Promise.all([
      getMediaPerCategory(routeFilter, "movie", validPageNumber ? pageNumber : undefined),
    ]);
    const [moviesList] = movieData;

    return (
      <>
        <MediaContainer mediaType="movies"  mediaList={moviesList} routeFilter={routeFilter} pageNumber={pageNumber} />
      </>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default page;
