import CitySearch from "@/components/city-search";
import CurrentWeather from "@/components/current-weather";

export default function Home() {
  return (
    <div className="grid md:grid-cols-2">
      <CurrentWeather />
      <CitySearch />
    </div>
  );
}
