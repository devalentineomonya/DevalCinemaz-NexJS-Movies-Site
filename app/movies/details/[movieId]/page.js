import { getInfo, getVideoInfo, getCastList, getReviews, getRecommended, getSimilar, getUpcoming } from "@/app/Api/api";
import MediaDetailsContainer from "@/Components/MediaDetailsContainer/MediaDetailsContainer";
import NotFound from "../../not-found";

const page = async ({ params }) => {
  const movieId = parseInt(params.movieId);

  if (isNaN(movieId)) {
    return <NotFound />
  }

  try {
    const movieData = await Promise.all([
      getInfo(movieId,"movie"),
      getVideoInfo(movieId,"movie"),
      getCastList(movieId,"movie"),
      getReviews(movieId,"movie"),
      getRecommended(movieId,"movie"),
      getSimilar(movieId,"movie"),
      getUpcoming(),
    ]);

    const [movieInfo, videoInfo, castList, movieReviews, recommendedMovies, similarMovies, upcomingMovies] = movieData;

    return (
      <div className="pt-[65px] dark:bg-customDark bg-customWhite">
        <MediaDetailsContainer
          movieInfo={movieInfo}
          videoInfo={videoInfo}
          castList={castList}
          movieReviews={movieReviews}
          recommendedMovies={recommendedMovies}
          similarMovies={similarMovies}
          upcomingMovies={upcomingMovies}
          type="Movie"
        />
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);

  }
};

export default page;
