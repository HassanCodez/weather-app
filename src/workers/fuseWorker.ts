import Fuse, { IFuseOptions } from "fuse.js";

type City = {
  id: number;
  name: string;
  country: string;
};

let fuse: Fuse<City> | null = null;

self.onmessage = async (e: MessageEvent) => {
  const { type, payload } = e.data;

  switch (type) {
    case "INIT":
      const cities: City[] = payload.cities;

      const options: IFuseOptions<City> = {
        keys: ["name"],
        threshold: 0.3,
      };

      fuse = new Fuse(cities, options);
      break;

    case "SEARCH":
      if (!fuse) return;
      const results = fuse.search(payload.query).slice(0, 5);
      self.postMessage({ type: "RESULTS", payload: results });
      break;
  }
};
