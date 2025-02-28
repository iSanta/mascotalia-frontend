import { httpPost } from "@/Application/http";

export const createLostPet = async (lostPet: FormData, token: string) => {
  return await httpPost(`${process.env.NEXT_PUBLIC_URL}v1/LostPet`, lostPet, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
