"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCitySearchWorker } from "@/hooks/useCitySearchWorker";
import Image from "next/image";

export default function CitySearch() {
  const [query, setQuery] = useState("");
  const { search, results, loading } = useCitySearchWorker();

  const handleChange = (value: string) => {
    setQuery(value);
    search(value);
  };

  return (
    <div className="container mx-auto py-10">
      <Card className="border-none">
        <CardHeader>
          <CardTitle>City Search</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Input
            type="text"
            placeholder="Start typing a city name..."
            value={query}
            onChange={(e) => handleChange(e.target.value)}
            className="w-full"
          />

          <div className="space-y-4">
            {loading ? (
              <div className="flex justify-center py-8">
                <Image
                  src={"/loader.svg"}
                  width={50}
                  height={50}
                  alt="Loading..."
                  className="animate-bounce"
                />
              </div>
            ) : results.length > 0 ? (
              <div className="space-y-2">
                <h3 className="text-sm font-medium">
                  Top {results.length}{" "}
                  {results.length === 1 ? "result" : "results"}
                </h3>
                <div className="grid gap-2">
                  {results.map((city) => (
                    <Card key={city.id} className="p-4">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">
                          {city.name}, {city.country}
                        </h3>
                        <span className="flex items-center gap-2">
                          <h3 className="font-medium"> {city.temp}°C</h3>
                          <Image
                            src={`https://openweathermap.org/img/wn/${city.icon}@2x.png`}
                            width={50}
                            height={50}
                            alt="weather icon"
                          />
                        </span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ) : query.length > 2 ? (
              <p className="text-center py-8 text-muted-foreground">
                No cities found
              </p>
            ) : (
              <p className="text-center py-8 text-muted-foreground">
                Type at least 2 characters to search
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
