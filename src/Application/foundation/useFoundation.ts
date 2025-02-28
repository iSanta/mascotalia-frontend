import useGetFoundation from "@/Infrastructure/state-managment/actions/foundation/useGetFoundation";
import { FoundationState } from "@/Domain/states/FoundationState";

const useFoundation = () => {
  const { call, getStoreFoundations } = useGetFoundation();

  const foundations = (): FoundationState => {
    return getStoreFoundations();
  };

  const getfoundationsByCity = (city: string | number) => {
    call(city);
  };

  return { getfoundationsByCity, foundations };
};

export default useFoundation;
