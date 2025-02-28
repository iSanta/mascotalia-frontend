import { FoundationState } from "@/Domain/states/FoundationState";
import useDispatch from "../../useDispatch";
import useSelect from "../../useSelect";
import { fetchFoundations } from "../../redux/thunks/foundation/fetchFoundations";

const useGetFoundation = () => {
  const { dispatchAction } = useDispatch();
  const [foundationState] = useSelect<FoundationState>((state) => state.foundation);

  const call = (city: string | number): void => {
    dispatchAction(fetchFoundations, { city });
  };

  const getStoreFoundations = (): FoundationState => {
    return foundationState();
  };

  return { call, getStoreFoundations };
};

export default useGetFoundation;
