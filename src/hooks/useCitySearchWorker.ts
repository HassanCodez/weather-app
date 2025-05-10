import { City } from "@/types/search-type";
import { useEffect, useMemo, useRef, useState } from "react";
import { useGetGroupWeather } from "./useGetGroupWeather";
import debounce from "lodash.debounce";
import { WeatherResponse } from "@/types/weather-types";

export type FuseResult = {
  item: City;
  score: number;
};

export type EnrichedResult = {
  id: number;
  name: string;
  country: string;
  temp: number;
  icon: string;
};

export function useCitySearchWorker() {
  const workerRef = useRef<Worker | null>(null);
  const [rawResults, setRawResults] = useState<FuseResult[]>([]);
  const [enrichedResults, setEnrichedResults] = useState<EnrichedResult[]>([]);
  const [cityIds, setCityIds] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const { data, refetch } = useGetGroupWeather(cityIds!);
  useEffect(() => {
    if (cityIds) {
      console.log("test");
      refetch();
    }
  }, [cityIds]);

  useEffect(() => {
    if (!data?.list || rawResults.length === 0) return;

    const weatherMap = new Map<number, WeatherResponse>();
    data.list.forEach((entry) => {
      weatherMap.set(entry.id, entry);
    });

    const merged = rawResults
      .map((r) => {
        const weather = weatherMap.get(r.item.id);
        if (!weather) return null;

        return {
          id: r.item.id,
          name: r.item.name,
          country: r.item.country,
          temp: weather.main.temp,
          icon: weather.weather?.[0]?.icon || "",
        };
      })
      .filter(Boolean) as EnrichedResult[];

    setEnrichedResults(merged);
  }, [data, rawResults]);

  // 🧠 Create and init worker ONCE
  useEffect(() => {
    const worker = new Worker(
      new URL("../workers/fuseWorker.ts", import.meta.url),
      { type: "module" }
    );
    workerRef.current = worker;

    const init = async () => {
      const citiesModule = await import("@/lib/cities.json");
      const cities = citiesModule.default;

      worker.postMessage({
        type: "INIT",
        payload: {
          cities,
          options: {
            keys: ["name"],
            threshold: 0.3,
            includeScore: true,
          },
        },
      });
    };

    init();

    const handleMessage = (e: MessageEvent) => {
      if (e.data.type === "RESULTS") {
        const results = e.data.payload as FuseResult[];
        setRawResults(results);

        if (results.length > 0) {
          const ids = results.map((r) => r.item.id).join(",");
          setCityIds(ids);
        } else {
          setCityIds(null);
        }

        setLoading(false);
      }
    };

    worker.addEventListener("message", handleMessage);

    return () => {
      worker.terminate();
    };
  }, []);

  // 🕓 Debounced search method
  const search = useMemo(
    () =>
      debounce((query: string) => {
        if (!query || query.length < 2) {
          setRawResults([]);
          setCityIds(null);
          setEnrichedResults([]);
          return;
        }

        setLoading(true);
        workerRef.current?.postMessage({ type: "SEARCH", payload: { query } });
      }, 500),
    []
  );
  return {
    search,
    loading,
    results: enrichedResults,
  };
}
