import { WeatherResponse } from "./weather-types";

export interface City {
  id: number;
  name: string;
  country: string;
}

export interface FuseResult {
  item: City;
}

export interface EnrichedResult extends WeatherResponse {
  id: number;
  name: string;
  country: string;
}
