import Associates from "@/Components/Associates/Associates";
import FooterBanner from "@/Components/FooterBanner/FooterBanner";
import HeroSwipper from "@/Components/HeroSwipper/HeroSwipper";
import HomeMainSection from "@/Components/HomeMainSection/HomeMainSection";

const discoverMovies = async () => {
  const discoveredMovies = await fetch(`${process.env.BASE_URL}/discover/movie?api_key=${process.env.API_KEY}`)
  if (!discoveredMovies.ok) {
    throw new Error("Error while fetching movies")
  } else {
    const data = await discoveredMovies.json();
    return data.results;
  }
}

const trendingMovies = async () => {
  const trendingResMovies = await fetch(`${process.env.BASE_URL}/trending/movie/day?language=en-US&api_key=${process.env.API_KEY}`)
  if (!trendingResMovies.ok) {
    throw new Error("Error while fetching movies")
  } else {
    const data = await trendingResMovies.json();
    return data.results;
  }
}

const fetchCountryName = async () => {
  const response = await fetch('https://ipapi.co/json/');
  if (!response.ok) {
    throw new Error("Error while fetching country name");
  }
  const data = await response.json();
  return data.country_name;
}

export default async function Home() {
  const sliderMovies = await discoverMovies();
  const trendingMoviesRes = await trendingMovies()
  const countryName = await fetchCountryName()

  return (
    <>
      <HeroSwipper sliderMovies={sliderMovies} />
      <HomeMainSection trendingMoviesRes={trendingMoviesRes} countryName={countryName} />
      <FooterBanner />
      <Associates />
    </>
  );
}

