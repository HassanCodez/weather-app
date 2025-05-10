import { useQuery } from "@tanstack/react-query";
import { GroupWeatherResponse } from "@/types/weather-types";

const getWeather = async (ids: string): Promise<GroupWeatherResponse> => {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/group?id=${ids}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`
  );
  return data.json();
};

export const useGetGroupWeather = (ids: string) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["groupWeather"],
    queryFn: () => getWeather(ids),
    queryHash: "groupWeather",
    enabled: false,
  });
  return { data, isLoading, error, refetch };
};
