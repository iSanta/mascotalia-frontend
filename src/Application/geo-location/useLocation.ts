import { useEffect, useState } from "react";
import useLocalStorage from "../local-storage/useLocalStorage";
import useGeoLocation from "./useGeoLocation";
import useReverseGeoCoding from "./useReverseGeoCoding";

const useLocation = ({ async = false }: { async?: boolean } = {}) => {
  const { save, get } = useLocalStorage();
  const reverseGeoCoding = useReverseGeoCoding();
  const geoLocationDb = useGeoLocation();
  const [userCity, setUserCity] = useState<string>(null);

  const getCoordinates = (): Promise<GeolocationPosition> => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  const getUserCity = async (): Promise<string | null> => {
    if (!navigator.geolocation) return null;
    if (get("city")) return get("city");

    try {
      const position = await getCoordinates();

      const latitude: string = position.coords.latitude.toString();
      const longitude: string = position.coords.longitude.toString();

      if (!get("latitude") && !get("longitude")) {
        save("latitude", latitude);
        save("longitude", longitude);
      }

      let city =
        (await geoLocationDb.getUserCity()) ||
        (await reverseGeoCoding.getUserCity(latitude, longitude));

      save("city", city);

      return city;
    } catch (error) {
      return "";
    }
  };

  /*
    Se obtiene la ciudad del usuario por medio de una api externa    
    y se guarda en redux
  */
  useEffect(() => {
    if (!async) return;
    (async () => {
      setUserCity(await getUserCity());
    })();
  }, []);

  return {
    getUserCity,
    getCoordinates,
    userCity,
  };
};

export default useLocation;
