import useDispatch from "@/Infrastructure/state-managment/useDispatch";
import { fetchPets } from "../../redux/thunks/pet/fetchPets";
import useSelect from "../../useSelect";
import { PetState } from "@/Domain/states/PetState";
import { PetFilters } from "@/Domain/pet/PetFilters";

const useGetPets = () => {
  const { dispatchAction } = useDispatch();
  const [petsState] = useSelect<PetState>((state) => state.pet);

  const get = (params?: PetFilters, filtered?: boolean): void => {
    dispatchAction(fetchPets, { params, filtered });
  };

  const getStorePets = (): PetState => {
    return petsState();
  };

  return { get, getStorePets };
};

export default useGetPets;
