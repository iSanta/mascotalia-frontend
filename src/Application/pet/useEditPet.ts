import { editPet } from "@/Infrastructure/pet/edit-pet";
import { EditPet } from "@/Domain/pet/detail/EditPet";
import { validateFormDataEmpty } from "../utils/validateFormDataEmpty";
import { NotificationResponse } from "@/Domain/common/notification/NotificationResponse";
import usePet from "./usePet";
import { deletePetImage } from "@/Infrastructure/petImage/delete-pet-image";
import { Pet } from "@/Domain/pet/detail/Pet";
import { UploadFile } from "antd";
import { updatePetImages } from "@/Infrastructure/petImage/update-pet-images";
import { withAuthTokenAsync } from "../auth/withAuthToken";

const useEditPet = () => {
  const { foundationPetsPaginated } = usePet();

  const edit = async (petId: string, pet: EditPet): Promise<NotificationResponse> => {
    const formData = new FormData();

    let imagesResponse: NotificationResponse = {};

    if (pet.files?.length) {
      pet.files.forEach((image) => {
        if (!("status" in image) && image.originFileObj) {
          formData.append("files", image.originFileObj);
        }
      });
      const updatePetImagesWithAuth = withAuthTokenAsync<typeof updatePetImages>(updatePetImages);
      const res = await updatePetImagesWithAuth(petId, formData);

      if (!res.success) {
        return {
          status: "error",
          message: res.message,
        };
      }

      imagesResponse = {
        status: "success",
        message: "Imágenes cargadas correctamente",
      };
    }

    for (const [key, value] of Object.entries(pet) as [string, Pet[keyof Pet] | UploadFile[]][]) {
      if (key !== "files" && value != undefined) formData.append(key, value as any);
    }

    if (validateFormDataEmpty(formData)) {
      return {
        status: "warning",
        message: "No se ha modificado ningún campo",
      };
    }

    const getPetsWithAuth = withAuthTokenAsync<typeof editPet>(editPet);

    const res = await getPetsWithAuth(petId, formData);
    await foundationPetsPaginated();

    if (Object.keys(imagesResponse).length === 0) {
      return {
        status: res.success ? "success" : "error",
        message: res.message,
      };
    } else {
      return {
        status: res.success ? "success" : "warning",
        message: res.success
          ? res.message
          : "Las imágenes se cargaron correctamente, pero hubo un error al editar la información de la mascota. ¿Envió la misma información?",
      };
    }
  };

  const deleteImage = async (image: UploadFile): Promise<NotificationResponse> => {
    if (!("status" in image)) {
      return {
        status: "warning",
        message: "No puede borrar una imagen que aún no carga.",
      };
    }

    const deletePetImageWithAuth = withAuthTokenAsync<typeof deletePetImage>(deletePetImage);
    const res = await deletePetImageWithAuth(image.uid);
    await foundationPetsPaginated();

    return {
      status: res.success ? "success" : "error",
      message: res.message,
    };
  };

  return { edit, deleteImage };
};

export default useEditPet;
