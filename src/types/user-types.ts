export interface Location {
  lat: number;
  lon: number;
}
export interface User {
  ip: string;
  location: Location;
  favoriteCities: string[];
  city: string;
}

export interface UserStore {
  user: User | null;
  update: (user: User) => void;
  addFavoriteCity: (city: string) => void;
  removeFavoriteCity: (city: string) => void;
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
