import { Cloudy, Droplet, Star, Wind } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WeatherCardTypes } from "@/types/weather-types";
import Image from "next/image";
import { useUserStore } from "@/stores/user-store";
import { cn } from "@/lib/utils";

const WeatherCard = (props: WeatherCardTypes) => {
  const { addFavoriteCity, isFavoriteCity, removeFavoriteCity } =
    useUserStore();
  return (
    <Card className="border-none">
      <CardHeader>
        <CardTitle className="text-3xl flex justify-between items-center">
          <h1>{props.city}</h1>
          {props.fav && (
            <Star
              className={cn("cursor-pointer", {
                "fill-yellow-300 stroke-yellow-500": isFavoriteCity(props),
              })}
              onClick={() =>
                isFavoriteCity(props)
                  ? removeFavoriteCity(props)
                  : addFavoriteCity(props)
              }
            />
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row items-center gap-10">
        <Image
          src={props.icon}
          width={150}
          height={150}
          alt="Weather"
          priority
        />
        <div className="space-y-2">
          <span className="flex">
            <h2 className="text-4xl font-bold">{props.temp}</h2>
            <sup className="text-lg font-bold">c</sup>
          </span>
          <h2 className="font-semibold text-xl">{props.main}</h2>
          <h3 className="font-semibold text-md">{props.desc}</h3>
          <span className="font-semibold">
            Feels like: {props.feelsLike} <sup>c</sup>
          </span>
        </div>
        <div className="flex flex-1 w-full md:w-fit justify-between md:justify-around items-end">
          <span className="flex flex-col items-center">
            <Wind className="w-10 md:28" />
            <p className="text-sm md:text-base font-semibold">Wind speed</p>
            <span className="text-xs md:text-base">
              {props.windSpeed} meter/sec
            </span>
          </span>
          <span className="flex flex-col items-center">
            <Cloudy className="w-10 md:28" />
            <p className="text-sm md:text-base font-semibold">Cloudiness</p>
            <span className="text-xs md:text-base">{props.clouds}%</span>
          </span>
          <span className="flex flex-col items-center">
            <Droplet className="w-10 md:28" />
            <p className="text-sm md:text-base font-semibold">Humidity</p>
            <span className="text-xs md:text-base">{props.humidity}%</span>
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
