import { httpGet } from "@/Application/http";
import { CommonResponse } from "@/Domain/common/CommonResponse";
import { Pet } from "@/Domain/pet/detail/Pet";

const getPetDetail = async (id: string): Promise<CommonResponse<Pet>> => {
  return (await httpGet<CommonResponse<Pet>>({ url: `${process.env.NEXT_PUBLIC_URL}v1/Pet/${id}` }))
    .data;
};

export { getPetDetail };
