import useSelect from "../../useSelect";
import { LostPetState } from "@/Domain/states/LostPetState";
import { LostPetLocation } from "@/Domain/lost-pet/LostPetLocation";
import { PaginatedResponse } from "@/Domain/login/http/PaginatedResponse";
import { LostPet } from "@/Domain/lost-pet/LostPet";
import { LostPetFilters } from "@/Domain/lost-pet/LostPetFilters";
import { fetchLostPets } from "../../redux/thunks/lost-pet/fetchLostPets";
import useDispatch from "../../useDispatch";

const useGetLostPet = () => {
  const [lostPetState] = useSelect<LostPetState>((state) => state.lostPet);
  const { dispatchAction } = useDispatch();

  const getStoreLostPetLocation = (): LostPetLocation => {
    return lostPetState().lostPetLocation;
  };

  const getStoreLostPets = (): PaginatedResponse<LostPet[]> => {
    return lostPetState().pagination;
  }

  const callLostPets = (params?: LostPetFilters) => {
    dispatchAction(fetchLostPets, { params });
  }


  return {
    getStoreLostPetLocation, getStoreLostPets, callLostPets
  };
};

export default useGetLostPet;
