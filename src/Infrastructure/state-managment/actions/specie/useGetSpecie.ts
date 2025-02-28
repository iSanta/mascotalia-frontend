import { SpecieState } from "@/Domain/states/SpecieState";
import useSelect from "../../useSelect";

const useGetSpecie = () => {
  const [specieState] = useSelect<SpecieState>((state) => state.specie);

  const getStoreSpecies = (): SpecieState => {
    return specieState();
  };

  return {
    getStoreSpecies
  };
};

export default useGetSpecie;
