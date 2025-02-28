import { httpGet } from "@/Application/http";
import { CommonResponse } from "@/Domain/common/CommonResponse";
import { Tag } from "@/Domain/tag/Tag";

export const getTags = async (): Promise<CommonResponse<Tag[]>> => {
  return (await httpGet<CommonResponse<Tag[]>>({ url: `${process.env.NEXT_PUBLIC_URL}v1/Tag` }))
    .data;
};
