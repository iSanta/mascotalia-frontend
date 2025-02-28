import { Specie } from "@/Domain/pet/specie/Specie";
import useDispatch from "../../useDispatch";
import { setSpecies } from "../../redux/reducers/specieSlice";
import { CommonResponse } from "@/Domain/common/CommonResponse";

const useSetSpecie = () => {
  const { dispatchAction } = useDispatch();

  const setStoreSpecies = (species: CommonResponse<Specie[]>) => {
    dispatchAction<CommonResponse<Specie[]>>(setSpecies, species);
  };

  return {
    setStoreSpecies,
  };
};

export default useSetSpecie;
