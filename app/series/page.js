import MediaContainer from '@/Components/MediaContainer/MediaContainer';
import React from 'react';
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
      getMediaPerCategory("popular", "tv",validPageNumber() || 1),
    ]);
    const [seriesList] = movieData;

    return (
      <>
        <MediaContainer mediaList={seriesList} mediaType="series" routeFilter="popular" pageNumber={pageNumber} />
      </>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default page;
