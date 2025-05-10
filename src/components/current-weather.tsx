"use client";

import { WEATHER_ICON_URL } from "@/config/config";
import { useCurrentWeather } from "@/hooks/useCurrentWeather";
import { useUserInfo } from "@/hooks/useUserInfo";
import Image from "next/image";
import WeatherCard from "./weather-card";
import WeatherCardSkeleton from "./weather-card-skeleton";
const CurrentWeather = () => {
  const { user, isLoading: userLoading, error: userError } = useUserInfo();
  const {
    data,
    isLoading: weatherLoading,
    error: weatherError,
  } = useCurrentWeather();
  if ((userLoading || weatherLoading) && !weatherError && !userError) {
    return <WeatherCardSkeleton />;
  }
  // console.log(userError, weatherError);
  if ((userError || weatherError) && !userLoading && !weatherLoading) {
    return (
      <div className="flex flex-col justify-center items-center gap-5">
        <Image
          src={"/error.png"}
          width={250}
          height={250}
          alt="Error"
          className="animate-pulse"
        />
        <p>{weatherError?.message || userError?.message}</p>
      </div>
    );
  }

  if (data && user) {
    return (
      <div className="container mx-auto">
        <WeatherCard
          city={user.city}
          icon={WEATHER_ICON_URL(data.weather[0].icon)}
          temp={data.main.temp}
          main={data.weather[0].main}
          desc={data.weather[0].description}
          feelsLike={data.main.feels_like}
          windSpeed={data.wind.speed}
          clouds={data.clouds.all}
          humidity={data.main.humidity}
        />
      </div>
    );
  }
};

export default CurrentWeather;
