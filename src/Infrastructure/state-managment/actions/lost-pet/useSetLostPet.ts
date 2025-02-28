import { LostPetLocation } from "@/Domain/lost-pet/LostPetLocation";
import useDispatch from "../../useDispatch";
import { setLostPetLocation, setLostPets } from "../../redux/reducers/lostPetSlice";
import { LostPet } from "@/Domain/lost-pet/LostPet";

const useSetLostPet = () => {
  const { dispatchAction } = useDispatch();

  const setLostPetLocationStore = (lostPetLocation: LostPetLocation) => {
    dispatchAction<LostPetLocation>(setLostPetLocation, lostPetLocation);
  };

  const storeLostPets = (lostPets: LostPet[]) => {
    dispatchAction<LostPet[]>(setLostPets, lostPets);
  };

  return {
    setLostPetLocationStore, storeLostPets
  };
};

export default useSetLostPet;
