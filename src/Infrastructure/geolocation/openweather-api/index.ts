"use client";
import { httpGet } from "@/Application/http";
import { OpenWeatherResponse } from "@/Domain/geolocation/openweather/Types";
import { ReverseGeocodingType } from "@/Domain/geolocation/Types";

const reverseGeocoding: ReverseGeocodingType = async (lat: string, lon: string) => {
  if (!lat || !lon) {
    return {
      city: "",
    };
  }

  const res = await httpGet<OpenWeatherResponse[]>({
    url: `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat.toString()}&lon=${lon.toString()}&limit=1&appid=${
      process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY
    }`,
  });

  return {
    city: res.data[0].name,
  };
};

export { reverseGeocoding };
