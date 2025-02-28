import { httpDelete } from "@/Application/http";

export const deletePetImage = async (id: string, token: string) => {
  return await httpDelete({
    url: `${process.env.NEXT_PUBLIC_URL}v1/PetImages`,
    id,
    options: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
};
