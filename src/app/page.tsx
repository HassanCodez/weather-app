import CitySearch from "@/components/city-search";
import CurrentWeather from "@/components/current-weather";
import Favorites from "@/components/favorites";

export default function Home() {
  return (
    <div className="container mx-auto grid md:grid-cols-3 gap-5">
      <CurrentWeather />
      <CitySearch />
      <Favorites />
    </div>
  );
}
