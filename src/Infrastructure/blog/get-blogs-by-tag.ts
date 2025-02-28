import { httpGet } from "@/Application/http";
import { Blog } from "@/Domain/blog/Blog";
import { PaginatedResponse } from "@/Domain/login/http/PaginatedResponse";

export const getBlogsByTag = async (
  tags: number[],
  page: string
): Promise<PaginatedResponse<Blog[]>> => {
  let queryString = "";
  queryString += `tags=${tags.join("&tags=")}`;

  return (
    await httpGet<PaginatedResponse<Blog[]>>({
      url: `${process.env.NEXT_PUBLIC_URL}v1/Blog/By-Tags?${queryString}&Page=${page}`,
    })
  ).data;
};
