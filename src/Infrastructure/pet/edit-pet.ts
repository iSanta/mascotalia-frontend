import { httpPut } from "@/Application/http";

export const editPet = async (id: string, data: FormData, token: string) => {
  return await httpPut({
    url: `${process.env.NEXT_PUBLIC_URL}v1/Pet/${id}`,
    data,
    options: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
};
