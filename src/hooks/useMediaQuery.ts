import { useState, useEffect } from "react";

function useMediaQuery(query: string): boolean {
  const getMatch = (): boolean => {
    if (
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function"
    ) {
      return window.matchMedia(query).matches;
    }
    return false; // Default for SSR
  };

  const [matches, setMatches] = useState<boolean>(getMatch);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQueryList = window.matchMedia(query);

    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Listen for changes
    mediaQueryList.addEventListener("change", handleChange);

    // Set initial value
    setMatches(mediaQueryList.matches);

    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;
