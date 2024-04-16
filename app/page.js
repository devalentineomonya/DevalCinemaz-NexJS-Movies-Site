import Associates from "@/Components/Associates/Associates";
import FooterBanner from "@/Components/FooterBanner/FooterBanner";
import HeroSwipper from "@/Components/HeroSwipper/HeroSwipper";
import HomeMainSection from "@/Components/HomeMainSection/HomeMainSection";
import { fetchCountryName, getMediaPerCategory } from "./Api/api";


export default async function Home() {

  try {
    const homePage = await Promise.all([
      fetchCountryName(),
      getMediaPerCategory("trending", "movie"),
      getMediaPerCategory("discover","movie"),
      getMediaPerCategory("upcoming", "movie"),
      getMediaPerCategory("top_rated", "movie"),
      getMediaPerCategory("top_rated", "tv"),
      getMediaPerCategory("now_playing", "movie"),
      getMediaPerCategory("airing_today","tv")


    ]);

    const [countryName, trendingMoviesRes, sliderMovies, upcomingMovies, topRatedMovies, topRatedSeries, nowPlayingMovies, seriesAiringToday] = homePage;



    return (
      <>
        <HeroSwipper sliderMovies={sliderMovies} />
        <HomeMainSection trendingMoviesRes={trendingMoviesRes} 
        countryName={countryName}
         upcomingMovies={upcomingMovies} 
         topRatedMovies={topRatedMovies} 
         topRatedSeries={topRatedSeries} 
         nowPlayingMovies={nowPlayingMovies}
         seriesAiringToday={seriesAiringToday}
         />
        <FooterBanner />
        <Associates />
      </>
    );
  } catch (error) {
    console.error("Error fetching data:", error);

  }
}

