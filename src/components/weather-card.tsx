import { Cloudy, Droplet, Wind } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WeatherCardTypes } from "@/types/weather-types";
import Image from "next/image";

const WeatherCard = ({
  city,
  icon,
  temp,
  main,
  desc,
  feelsLike,
  windSpeed,
  clouds,
  humidity,
}: WeatherCardTypes) => {
  return (
    <Card className="border-none">
      <CardHeader>
        <CardTitle className="text-3xl">{city}</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center gap-10">
        <Image src={icon} width={150} height={150} alt="Weather" />
        <div className="space-y-2">
          <span className="flex">
            <h2 className="text-4xl font-bold">{temp}</h2>
            <sup className="text-lg font-bold">c</sup>
          </span>
          <h2 className="font-semibold text-xl">{main}</h2>
          <h3 className="font-semibold text-md">{desc}</h3>
          <span className="font-semibold text-sm">
            Feels like: {feelsLike} <sup>c</sup>
          </span>
        </div>
        <div className="flex flex-1 justify-around items-end">
          <span className="flex flex-col items-center">
            <Wind size={30} />
            <p>Wind speed</p>
            <span>
              {windSpeed} <sub>meter/sec</sub>
            </span>
          </span>
          <span className="flex flex-col items-center">
            <Cloudy size={30} />
            <p>Cloudiness</p>
            <span>{clouds}%</span>
          </span>
          <span className="flex flex-col items-center">
            <Droplet size={30} />
            <p>Humidity</p>
            <span>{humidity}%</span>
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
