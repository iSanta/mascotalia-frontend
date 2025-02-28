import { GeoLocationDrivers } from "@/Domain/geolocation/Drivers";
import { getLocationDb } from "./geolocation-db";
import { reverseGeocoding } from "./openweather-api";
import { GeoLocationTypes } from "@/Domain/geolocation/Types";

const getLocation = (geoLocationDriver: GeoLocationDrivers): GeoLocationTypes => {
  switch (geoLocationDriver) {
    case "geolocationdb":
      return getLocationDb;
    case "openweather":
      return reverseGeocoding;

    default:
      return getLocationDb;
  }
};

export { getLocation };
