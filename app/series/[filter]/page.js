"use client"
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

  const possibleRoutes = ["popular", "airing_today", "on_the_air", "top_rated"];

  if (!possibleRoutes.includes(routeFilter)) {
    return <NotFound />;
  }

  try {
    const movieData = await Promise.all([
      getMediaPerCategory(routeFilter, "tv", validPageNumber() || 1,),
    ]);
    const [seriesList] = movieData;

    return (
      <>

        <MediaContainer mediaList={seriesList} mediaType="series" routeFilter={routeFilter} pageNumber={pageNumber}  />
      </>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default page;
