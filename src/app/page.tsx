import CitySearch from "@/components/city-search";
import CurrentWeather from "@/components/current-weather";

export default function Home() {
  return (
    <div>
      <CurrentWeather />
      <CitySearch />
    </div>
  );
}
