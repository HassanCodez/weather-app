import CitySearch from "@/components/CitySearch";
import CurrentWeather from "@/components/CurrentWeather";

export default function Home() {
  return (
    <div>
      <CurrentWeather />
      <CitySearch />
    </div>
  );
}
