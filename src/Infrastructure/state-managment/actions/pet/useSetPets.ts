import { PetToAdopt } from "@/Domain/pet/PetToAdopt";
import { setPetsToAdopt } from "../../redux/reducers/petSlice";
import useDispatch from "@/Infrastructure/state-managment/useDispatch";
import { PaginatedResponse } from "@/Domain/login/http/PaginatedResponse";
import { CommonResponse } from "@/Domain/common/CommonResponse";

const useSetPets = () => {
  const { dispatchAction } = useDispatch();

  const setPets = (pets: CommonResponse<PaginatedResponse<PetToAdopt[]>>) => {
    dispatchAction<CommonResponse<PaginatedResponse<PetToAdopt[]>>>(setPetsToAdopt, pets);
  };

  return {
    setPets,
  };
};

export default useSetPets;
