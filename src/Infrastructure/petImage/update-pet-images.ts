import { httpPut } from "@/Application/http";

export const updatePetImages = async (id: string, data: FormData, token: string) => {
  return await httpPut({
    url: `${process.env.NEXT_PUBLIC_URL}v1/PetImages/${id}`,
    data,
    options: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
};
