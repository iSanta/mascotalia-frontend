import useAuth from "../auth/useAuth";
import { createBlog } from "@/Infrastructure/blog/create-blog";
import { NotificationResponse } from "@/Domain/common/notification/NotificationResponse";
import { CreateBlog } from "@/Domain/blog/CreateBlog";
import { useState } from "react";
import { withAuthTokenAsync } from "../auth/withAuthToken";

const useCreateBlog = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const create = async (values: CreateBlog): Promise<NotificationResponse> => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("entry", values.entry);
    formData.append("quote", values.quote);

    values.tags.forEach((tag) => {
      formData.append("tags", tag.toString());
    });

    values.files?.fileList?.forEach((file) => {
      formData.append(`files`, file.originFileObj);
    });
    const softDeletePetWithAuth = withAuthTokenAsync(createBlog); 
    const response = await softDeletePetWithAuth(formData);
    setIsLoading(false);
    return {
      message: response.success ? "Blog creado" : response.message,
      status: response.success ? "success" : "error",
    };
  };

  return { create, isLoading };
};

export default useCreateBlog;
