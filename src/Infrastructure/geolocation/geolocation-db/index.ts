"use client";
import { httpGet } from "@/Application/http";
import { GeoLocationDbResponse } from "@/Domain/geolocation/geolocationdb/Types";
import { GetLocationDbType } from "@/Domain/geolocation/Types";

const getLocationDb: GetLocationDbType = async () => {
  const res = await httpGet<GeoLocationDbResponse>({
    url: `https://geolocation-db.com/json/`,
  });

  return {
    city: res.data.city,
  };
};

export { getLocationDb };
