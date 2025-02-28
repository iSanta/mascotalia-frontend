import { useState } from "react";
import { NotificationResponse } from "@/Domain/common/notification/NotificationResponse";
import { CreatePet } from "@/Domain/pet/CreatePet";
import { withAuthTokenAsync } from "../auth/withAuthToken";
import { createPet } from "@/Infrastructure/pet/create-pet";

const useCreatePet = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);


  const create = async (values: CreatePet): Promise<NotificationResponse> => {
    if (!values?.pets) {
      return {
        status: "error",
        message: "Formulario vacío",
      };
    }

    setIsLoading(true);
    const formData = new FormData();

    values.pets.forEach((pet, index: number) => {
      formData.append(`createPetDTO[${index}].specieId`, pet.specie.toString());
      formData.append(`createPetDTO[${index}].sexId`, pet.sex.toString());
      formData.append(`createPetDTO[${index}].sizeId`, pet.size.toString());
      formData.append(`createPetDTO[${index}].age`, pet.age.toString());
      formData.append(`createPetDTO[${index}].description`, pet.description);
      formData.append(`createPetDTO[${index}].weight`, pet.weight ? pet.weight.toString() : "0");
      formData.append(`createPetDTO[${index}].dewormed`, pet.dewormed ? "true" : "false");
      formData.append(`createPetDTO[${index}].vaccinated`, pet.vaccinated ? "true" : "false");
      formData.append(`createPetDTO[${index}].sterilized`, pet.sterilized ? "true" : "false");
      formData.append(`createPetDTO[${index}].identifier`, pet.identifier);

      pet.files?.fileList.forEach((file) => {
        formData.append(`createPetDTO[${index}].Files`, file.originFileObj);
      });
    });

    const createPetWithAuth = withAuthTokenAsync<typeof createPet>(createPet);
    const res = await createPetWithAuth(formData);

    setIsLoading(false);

    return {
      status: res.success ? "success" : "error",
      message: res.message,
    };
  };

  return {
    create,
    isLoading,
  };
};

export default useCreatePet;
