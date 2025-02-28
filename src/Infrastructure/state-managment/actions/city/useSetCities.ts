import useDispatch from "../../useDispatch";
import { setCities } from "../../redux/reducers/citySlice";
import { City } from "@/Domain/city/City";

const useSetCities = () => {
  const { dispatchAction } = useDispatch();

  const setStoreCities = (cities: City[]) => {
    dispatchAction<City[]>(setCities, cities);
  };

  return {
    setStoreCities,
  };
};

export default useSetCities;
