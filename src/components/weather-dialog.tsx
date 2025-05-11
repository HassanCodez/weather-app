import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { WEATHER_ICON_URL } from "@/config/config";
import WeatherCard from "./weather-card";
import useMediaQuery from "@/hooks/useMediaQuery";
import { WeatherCardTypes } from "@/types/weather-types";
interface Props extends WeatherCardTypes {
  children: ReactNode;
}
const WeatherDialog = (props: Props) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog>
        <DialogTrigger>{props.children}</DialogTrigger>
        <DialogContent className="md:min-w-3xl bg-white">
          <DialogHeader>
            <DialogTitle className="hidden"></DialogTitle>
            <DialogDescription className="hidden"></DialogDescription>
            <WeatherCard
              city={props.city}
              clouds={props.clouds}
              desc={props.desc}
              feelsLike={props.feelsLike}
              humidity={props.humidity}
              icon={props.icon}
              main={props.main}
              temp={props.temp}
              windSpeed={props.windSpeed}
              fav
            />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  }
  return (
    <Drawer>
      <DrawerTrigger>{props.children}</DrawerTrigger>
      <DrawerContent className="bg-white">
        <DrawerHeader className="justify-start pt-0 mt-0">
          <DrawerTitle className="hidden"></DrawerTitle>
          <DrawerDescription className="hidden"></DrawerDescription>
          <div className="scale-90">
            <WeatherCard
              city={props.city}
              clouds={props.clouds}
              desc={props.desc}
              feelsLike={props.feelsLike}
              humidity={props.humidity}
              icon={props.icon}
              main={props.main}
              temp={props.temp}
              windSpeed={props.windSpeed}
              fav
            />
          </div>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default WeatherDialog;
