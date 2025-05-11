"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useUserStore } from "@/stores/user-store";
import WeatherCard from "./weather-card";

const Favorites = () => {
  const { user } = useUserStore();
  return (
    <Card className="border-none md:col-span-2">
      <CardHeader>
        <CardTitle>Favorites</CardTitle>
      </CardHeader>
      <CardContent>
        {user?.favoriteCities ? (
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
          <p>No favorite cities yet...</p>
        )}
      </CardContent>
    </Card>
  );
};

export default Favorites;
