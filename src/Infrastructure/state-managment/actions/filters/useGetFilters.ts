import { FiltersState } from "@/Domain/states/FiltersState";
import useSelect from "../../useSelect";
import { Filters } from "@/Domain/filters/Filters";

const useGetFilters = () => {
  const [filtersState] = useSelect<FiltersState>((state) => state.filters);

  const getStoreFilters = (): Object => {
    return filtersState().filters;
  };
  return { getStoreFilters };
};

export default useGetFilters;
