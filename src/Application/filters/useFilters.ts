import { Filters } from "@/Domain/filters/Filters";
import useGetFilters from "@/Infrastructure/state-managment/actions/filters/useGetFilters";
import useSetFilters from "@/Infrastructure/state-managment/actions/filters/useSetFilters";

const useFilters = () => {
  const { set, reset } = useSetFilters();
  const { getStoreFilters } = useGetFilters();

  const setFilters = (filters: Filters) => {
    set(filters);
  };

  const resetFilters = () => {
    reset();
  };

  return { setFilters, getStoreFilters, resetFilters };
};

export default useFilters;
