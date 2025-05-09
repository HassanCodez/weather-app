import { User } from "@/types/user-types";
import { useQuery } from "@tanstack/react-query";
import { useUserInfo } from "./useUserInfo";
import { WeatherResponse } from "@/types/weather-types";

const getWeather = async (user: User): Promise<WeatherResponse> => {
  const data =
    user &&
    (await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${user.location.lat}&lon=${user.location.lon}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=metric`
    ));
  return data.json();
};

export const useCurrentWeather = () => {
  const { user } = useUserInfo();

  const { data, isLoading, error } = useQuery({
    queryKey: ["currentWeather"],
    queryFn: () => getWeather(user!),
    queryHash: "currentWeather",
  });
  return { data, isLoading, error };
};
