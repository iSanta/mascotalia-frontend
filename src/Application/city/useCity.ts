import { City } from "@/Domain/city/City";
import { CityState } from "@/Domain/states/CityState";
import useGetCities from "@/Infrastructure/state-managment/actions/city/useGetCities";
import useSetCities from "@/Infrastructure/state-managment/actions/city/useSetCities";

const useCity = () => {
  const { getStoreCities } = useGetCities();
  const { setStoreCities } = useSetCities();

  const getCities = (): CityState => {
    return getStoreCities();
  };

  const setCities = (cities: City[]) => {
    setStoreCities(cities);
  };

  return {
    getCities,
    setCities,
  };
};

export default useCity;
