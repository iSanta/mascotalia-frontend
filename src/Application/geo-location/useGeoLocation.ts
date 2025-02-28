import { GetLocationDbType } from "@/Domain/geolocation/Types";
import { getLocation } from "@/Infrastructure/geolocation/get-location";

const useGeoLocation = () => {
  const getUserCity = async () => {
    const getLocationFn = getLocation("geolocationdb") as GetLocationDbType;
    return (await getLocationFn()).city;
  };

  return {
    getUserCity,
  };
};

export default useGeoLocation;
