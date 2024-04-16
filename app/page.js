import Associates from "@/Components/Associates/Associates";
import FooterBanner from "@/Components/FooterBanner/FooterBanner";
import HeroSwipper from "@/Components/HeroSwipper/HeroSwipper";
import HomeMainSection from "@/Components/HomeMainSection/HomeMainSection";
import { fetchCountryName, trendingMovies, discoverMovies, getUpcoming, getMediaPerCategory} from "./Api/api";


export default async function Home() {

  try {
    const homePage = await Promise.all([
      fetchCountryName(),
      trendingMovies(),
      discoverMovies(),
      getUpcoming(),
      getMediaPerCategory("top_rated", "movie"),
      getMediaPerCategory("top_rated", "tv")


    ]);

    const [countryName, trendingMoviesRes, sliderMovies, upcomingMovies, topRatedMovies, topRatedSeries] = homePage;



    return (
      <>
        <HeroSwipper sliderMovies={sliderMovies} />
        <HomeMainSection trendingMoviesRes={trendingMoviesRes} countryName={countryName}  upcomingMovies={upcomingMovies} topRatedMovies={topRatedMovies} topRatedSeries={topRatedSeries} />
        <FooterBanner />
        <Associates />
      </>
    );
  } catch (error) {
    console.error("Error fetching data:", error);

  }
}

