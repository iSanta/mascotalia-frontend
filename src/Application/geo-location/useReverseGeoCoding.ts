import { getLocation } from "@/Infrastructure/geolocation/get-location";

const useReverseGeoCoding = () => {
  const getUserCity = async (latitude: string, longitude: string): Promise<string> => {
    const getLocationFn = getLocation("openweather");

    if (!latitude || !longitude) {
      return "";
    }
    return (await getLocationFn(latitude, longitude)).city;
  };

  return {
    getUserCity,
  };
};

export default useReverseGeoCoding;
