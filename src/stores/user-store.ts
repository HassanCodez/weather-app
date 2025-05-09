import { UserStore } from "@/types/user-types";
import { encryptedStorage } from "@/util/encryptedStorage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      update: (updatedUser) => set(() => ({ user: updatedUser })),
      addFavoriteCity: (city) =>
        set((state) => {
          if (!state.user) return state;
          const currentFavoriteCities = state.user.favoriteCities || [];
          return {
            user: {
              ...state.user,
              favoriteCities: [...currentFavoriteCities, city],
            },
          };
        }),
      removeFavoriteCity: (city) =>
        set((state) => {
          if (!state.user) return state;

          const updatedFavoriteCities = state.user.favoriteCities.filter(
            (favoriteCity) => favoriteCity !== city
          );

          return {
            user: {
              ...state.user,
              favoriteCities: updatedFavoriteCities,
            },
          };
        }),
    }),
    { name: "user", storage: createJSONStorage(() => encryptedStorage()) }
  )
);
