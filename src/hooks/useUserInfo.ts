import { useUserStore } from "@/stores/user-store";
import { UserIpInfo } from "@/types/user-types";
import { extractLocation } from "@/util/extractLocation";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const getInfo = async (): Promise<UserIpInfo> => {
  const data = await fetch("https://ipinfo.io/json", {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_IPINFO_TOKEN}`,
    },
  });
  return data.json();
};

export const useUserInfo = () => {
  const { user, update } = useUserStore();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["userInfo"],
    queryFn: getInfo,
    queryHash: "userInfo",
  });
  useEffect(() => {
    if (data) {
      console.log(data);
      const location = extractLocation(data.loc);
      update({
        ip: data?.ip,
        location: location,
        favoriteCities: user?.favoriteCities || [],
        city: data?.city,
      });
    }
  }, [data]);

  return { user, isLoading, isError, error };
};
