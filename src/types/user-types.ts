import { WeatherCardTypes } from "./weather-types";

export interface Location {
  lat: number;
  lon: number;
}
export interface User {
  ip: string;
  location: Location;
  favoriteCities: WeatherCardTypes[];
  city: string;
}

export interface UserStore {
  user: User | null;
  update: (user: User) => void;
  addFavoriteCity: (city: WeatherCardTypes) => void;
  removeFavoriteCity: (city: WeatherCardTypes) => void;
  isFavoriteCity: (city: WeatherCardTypes) => boolean;
}

export interface UserIpInfo {
  ip: string;
  city: string;
  region: string;
  country: string;
  loc: string;
  org: string;
  timezone: string;
  readme: string;
}
