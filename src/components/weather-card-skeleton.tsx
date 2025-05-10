import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WeatherCardSkeleton = () => {
  return (
    <Card className="container mx-auto border-none animate-pulse">
      <CardHeader>
        <CardTitle className="text-3xl bg-gray-300 rounded w-1/8 h-8"></CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row items-center gap-10">
        {/* Image Placeholder */}
        <div className="w-[150px] h-[150px] bg-gray-300 rounded"></div>

        {/* Temperature and Description Placeholder */}
        <div className="space-y-2">
          <div className="flex items-start gap-1">
            <div className="w-16 h-10 bg-gray-300 rounded"></div>
            <div className="w-4 h-5 bg-gray-300 rounded mt-1"></div>
          </div>
          <div className="w-32 h-6 bg-gray-300 rounded"></div>
          <div className="w-40 h-5 bg-gray-300 rounded"></div>
          <div className="w-48 h-5 bg-gray-300 rounded"></div>
        </div>

        {/* Stats Section */}
        <div className="flex flex-1 w-full md:w-fit justify-between md:justify-around items-end gap-4">
          {/* Wind */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            <div className="w-20 h-4 bg-gray-300 rounded"></div>
            <div className="w-24 h-4 bg-gray-300 rounded"></div>
          </div>
          {/* Cloudiness */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            <div className="w-20 h-4 bg-gray-300 rounded"></div>
            <div className="w-24 h-4 bg-gray-300 rounded"></div>
          </div>
          {/* Humidity */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            <div className="w-20 h-4 bg-gray-300 rounded"></div>
            <div className="w-24 h-4 bg-gray-300 rounded"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherCardSkeleton;
