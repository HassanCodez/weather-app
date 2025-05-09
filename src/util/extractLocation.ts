import { Location } from "@/types/user-types";

export const extractLocation = (location: string): Location => {
  const locationArray = location.split(",");
  return {
    lat: Number(locationArray[0]),
    lon: Number(locationArray[1]),
  };
};
