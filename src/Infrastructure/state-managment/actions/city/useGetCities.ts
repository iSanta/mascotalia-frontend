import useDispatch from "../../useDispatch";
import useSelect from "../../useSelect";
import { CityState } from "@/Domain/states/CityState";

const useGetCities = () => {
  const { dispatchAction } = useDispatch();
  const [cityState] = useSelect<CityState>((state) => state.city);

  const getStoreCities = (): CityState => {
    return cityState();
  };

  return {
    getStoreCities,
  };
};

export default useGetCities;
