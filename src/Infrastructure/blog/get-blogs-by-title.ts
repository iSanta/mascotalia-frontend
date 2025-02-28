import { httpGet } from "@/Application/http";
import { Blog } from "@/Domain/blog/Blog";
import { PaginatedResponse } from "@/Domain/login/http/PaginatedResponse";

const getBlogsByTitle = async (
  title: string,
  page: string
): Promise<PaginatedResponse<Blog[]>> => {
  return (
    await httpGet<PaginatedResponse<Blog[]>>({
      url: `${process.env.NEXT_PUBLIC_URL}v1/Blog/By-Title/${title}?Page=${page}`,
    })
  ).data;
};

export { getBlogsByTitle };
