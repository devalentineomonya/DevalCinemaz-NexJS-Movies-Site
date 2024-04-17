import MediaContainer from '@/Components/MediaContainer/MediaContainer';
import React from 'react';
import { getMediaPerCategory } from '@/app/Api/api';
import NotFound from '@/app/movies/not-found';

const page = async ({ params, searchParams }) => {
  const routeFilter = (params.filter)
    .toString()
    .replaceAll("-", "_") === "on_tv"
    ? "on_the_air"
    : (params.filter).toString().replaceAll("-", "_");

  const pageNumber = parseInt(searchParams.page)
  const validPageNumber = searchParams && !isNaN(pageNumber) && pageNumber > 0 ? 1 : pageNumber;


  console.log(searchParams);
  console.log(routeFilter);
  const possibleRoutes = ["popular", "airing_today", "on_the_air", "top_rated"];

  if (!possibleRoutes.includes(routeFilter)) {
    return <NotFound />;
  }

  try {
    const movieData = await Promise.all([
      getMediaPerCategory(routeFilter, "tv", validPageNumber ? pageNumber : undefined),
    ]);
    const [seriesList] = movieData;

    return (
      <>
        <MediaContainer mediaList={seriesList} mediaType="series" routeFilter={routeFilter} pageNumber={pageNumber} />
      </>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default page;
