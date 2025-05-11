"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useUserStore } from "@/stores/user-store";
import WeatherCard from "./weather-card";
import Image from "next/image";
import { Heart } from "lucide-react";

const Favorites = () => {
  const { user } = useUserStore();
  return (
    <Card className="border-none md:col-span-2">
      <CardHeader>
        <CardTitle>Favorites</CardTitle>
      </CardHeader>
      <CardContent>
        {user?.favoriteCities.length ? (
          user.favoriteCities.map((city) => (
            <WeatherCard
              key={city.city}
              city={city.city}
              clouds={city.clouds}
              desc={city.desc}
              feelsLike={city.feelsLike}
              humidity={city.humidity}
              icon={city.icon}
              main={city.main}
              temp={city.temp}
              windSpeed={city.windSpeed}
              fav
            />
          ))
        ) : (
          <div className="flex flex-col justify-start items-center">
            <Image src={"/empty.svg"} width={250} height={250} alt="empty" />
            <p className="flex gap-1 items-center text-sm md:text-base">
              No favorite cities yet, click{" "}
              <Heart className="w-3 aspect-square" color="red" /> to add it to
              the favorite
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Favorites;
