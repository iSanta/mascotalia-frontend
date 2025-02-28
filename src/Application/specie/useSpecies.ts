import { CommonResponse } from "@/Domain/common/CommonResponse";
import { Specie } from "@/Domain/pet/specie/Specie";
import { SpecieState } from "@/Domain/states/SpecieState";
import useGetSpecie from "@/Infrastructure/state-managment/actions/specie/useGetSpecie";
import useSetSpecie from "@/Infrastructure/state-managment/actions/specie/useSetSpecie";

const useSpecies = () => {
  const { setStoreSpecies } = useSetSpecie();
  const { getStoreSpecies } = useGetSpecie();

  const saveSpecies = (species: CommonResponse<Specie[]>) => {
    setStoreSpecies(species);
  };

  const getSpecies = (): SpecieState => {
    return getStoreSpecies();
  };

  return { saveSpecies, getSpecies };
};

export default useSpecies;
