import { httpGet } from "@/Application/http";
import { BlogDetail } from "@/Domain/blog/BlogDetail";
import { CommonResponse } from "@/Domain/common/CommonResponse";
import { HttpResponse } from "@/Domain/login/http/HttpResponse";

export const getBlog = async (blogId: string): Promise<CommonResponse<BlogDetail>> => {
  return (
    await httpGet<CommonResponse<BlogDetail>>({
      url: `${process.env.NEXT_PUBLIC_URL}v1/Blog/${blogId}`,
    })
  ).data;
};
