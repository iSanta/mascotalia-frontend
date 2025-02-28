import useDispatch from "../../useDispatch";
import { resetFilters, setFilters } from "../../redux/reducers/filtersSlice";
import { Filters } from "@/Domain/filters/Filters";

const useSetFilters = () => {
  const { dispatchAction } = useDispatch();

  const set = (filters: Filters) => {
    dispatchAction<Filters>(setFilters, filters);
  };

  const reset = () => {
    dispatchAction<Filters>(resetFilters);
  };

  return { set, reset };
};

export default useSetFilters;
