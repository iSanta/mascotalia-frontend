import { httpPost } from "@/Application/http";

export const createPet = async (pets: FormData, token: string) => {
  return await httpPost(`${process.env.NEXT_PUBLIC_URL}v1/Pet/Create-Pet`, pets, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
