import { CreateLostPet } from "@/Domain/lost-pet/CreateLostPet";
import { LostPetLocation } from "@/Domain/lost-pet/LostPetLocation";
import useGetLostPet from "@/Infrastructure/state-managment/actions/lost-pet/useGetLostPet";
import useSetLostPet from "@/Infrastructure/state-managment/actions/lost-pet/useSetLostPet";
import { withAuthTokenAsync } from "@/Application/auth/withAuthToken";
import { createLostPet } from "@/Infrastructure/lost-pet/create-lost-pet";
import { PaginatedResponse } from "@/Domain/login/http/PaginatedResponse";
import { LostPet } from "@/Domain/lost-pet/LostPet";
import { LostPetFilters } from "@/Domain/lost-pet/LostPetFilters";

const useLostPet = () => {
  const { getStoreLostPetLocation, callLostPets, getStoreLostPets } = useGetLostPet();
  const { setLostPetLocationStore } = useSetLostPet();

  const insertLostPet = async (lostPet: CreateLostPet) => {
    const formData = new FormData();

    formData.append("createLostPetDTO.specieId", lostPet.specieId);
    formData.append("createLostPetDTO.sexId", lostPet.sexId);
    formData.append("createLostPetDTO.sizeId", lostPet.sizeId);
    formData.append("createLostPetDTO.contactPhone", lostPet.contactPhone.toString());
    formData.append("createLostPetDTO.age", lostPet.age.toString());
    formData.append("createLostPetDTO.latitude", lostPet.latitude);
    formData.append("createLostPetDTO.longitude", lostPet.longitude);
    formData.append("createLostPetDTO.lostAddress", lostPet.lostAddress);
    formData.append("createLostPetDTO.description", lostPet.description);
    formData.append("createLostPetDTO.contactName", lostPet.contactName);
    formData.append("createLostPetDTO.name", lostPet.name);
    formData.append("createLostPetDTO.wasFound", lostPet.wasFound ? "true" : "false");

    lostPet.files?.fileList.forEach((file: any) => {
      formData.append("createLostPetDTO.Files", file.originFileObj);
    });

    const createLostPetWithAuth = withAuthTokenAsync<typeof createLostPet>(createLostPet);
    return await createLostPetWithAuth(formData);
  }

  const getLostPetLocation = (): LostPetLocation => {
    return getStoreLostPetLocation();
  };

  const setLostPetLocation = (lostPetLocation: LostPetLocation) => {
    setLostPetLocationStore(lostPetLocation);
  };

  const lostPetsCall = (filters: LostPetFilters = {}) => {
    callLostPets(filters);
  }

  const getLostPets = (): PaginatedResponse<LostPet[]> => {
    return getStoreLostPets();
  }

  return { getLostPetLocation, setLostPetLocation, insertLostPet, getLostPets, lostPetsCall };
};

export default useLostPet;
