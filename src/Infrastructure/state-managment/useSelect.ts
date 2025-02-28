import { RootState } from "./redux/store";
import { useAppSelector } from "./redux/store-hooks";

type SelectorFn<T> = (state: RootState) => T;

const useSelect = <T>(selectorFn: SelectorFn<T>) => {
  const selector = useAppSelector(selectorFn);

  const getStoreData = () => {
    return selector;
  };

  return [getStoreData];
};

export default useSelect;
