import MediaDetailsContainer from "@/Components/MediaDetailsContainer/MediaDetailsContainer"


const getMovieInfo = async (params) => {
  const res = await fetch(`${process.env.BASE_URL}/movie/${params}?api_key=${process.env.API_KEY}`);
  if (!res.ok) {
    throw new Error("There was an error when fetching movies");
  } else {
    const moviesData = await res.json(); // Await here
    return moviesData;
  }
};

const getRecommendedMovies = async (params) => {
  const res = await fetch(`${process.env.BASE_URL}/movie/${params}/recommendations?api_key=${process.env.API_KEY}`);
  if (!res.ok) {
    throw new Error("There was an error when fetching movies");
  } else {
    const recommendations = await res.json(); // Await here
    return recommendations.results
  }
};

const getVideoInfo = async (movieID) => {
  const videoUrl = `${process.env.BASE_URL}/movie/${movieID}/videos?api_key=${process.env.API_KEY}`;
  try {
    const response = await fetch(videoUrl);
    const data = await response.json();
    const trailer = data.results.find((v) => v.type === "Trailer");
    return trailer;
  } catch (error) {
    console.error("Error fetching video data:", error);
  }
 
};

const getCastList = async(movieId)=>{
  const response  = await  fetch(`${process.env.BASE_URL}/movie/${movieId}/credits?language=en-US&api_key=${process.env.API_KEY}`)
  if(!response.ok){
    throw new Error(response.message)
  }else{
    const data = await response.json();
    return data.cast
  }
}


const getMovieReviews = async(movieId)=>{
  const response  = await  fetch(`${process.env.BASE_URL}/movie/${movieId}/reviews?language=en-US&api_key=${process.env.API_KEY}`)
  if(!response.ok){
    throw new Error(response.message)
  }else{
    const data = await response.json();
    return data.results
  }
}


const page = async ({params}) => {
  const movieInfo = await getMovieInfo(params.movieId);
  const videoInfo = await getVideoInfo(params.movieId);
  const castList = await getCastList(params.movieId)
  const movieReviews = await getMovieReviews(params.movieId)
  const recommendedMovies = await getRecommendedMovies(params.movieId)
  return (
    <div className="pt-[65px] dark:bg-customDark bg-customWhite">
     <MediaDetailsContainer movieInfo={movieInfo} videoInfo={videoInfo} castList={castList} movieReviews={movieReviews} recommendedMovies={recommendedMovies}/>
      
    </div>
  )
}

export default page
