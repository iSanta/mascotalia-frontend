import { httpPost } from "@/Application/http";

export const createBlog = async (token: string, blog: FormData) => {

  return await httpPost(`${process.env.NEXT_PUBLIC_URL}v1/Blog`, blog, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
