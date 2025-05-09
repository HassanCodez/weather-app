"use client";

import { WEATHER_ICON_URL } from "@/config/config";
import { useCurrentWeather } from "@/hooks/useCurrentWeather";
import { useUserInfo } from "@/hooks/useUserInfo";
import Image from "next/image";
import WeatherCard from "./weather-card";
const CurrentWeather = () => {
  const { user, isLoading: userLoading, error: userError } = useUserInfo();
  const {
    data,
    isLoading: weatherLoading,
    error: weatherError,
  } = useCurrentWeather();
  if ((userLoading || weatherLoading) && !weatherError && !userError) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Image
          src={"/loader.svg"}
          width={250}
          height={250}
          alt="Loading..."
          className="animate-bounce"
        />
      </div>
    );
  }
  // console.log(userError, weatherError);
  if ((userError || weatherError) && !userLoading && !weatherLoading) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center gap-5">
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
      <div className="container mx-auto min-h-[80vh]">
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
