import { httpPost } from "@/Application/http";
import { CommonResponse } from "@/Domain/common/CommonResponse";
import { NotificationResponse } from "@/Domain/common/notification/NotificationResponse";

export const softDeletePet = async (id: string, isDeleted: boolean, token: string) => {
  const formData = new FormData();
  formData.append("isDeleted", isDeleted.toString());
  return await httpPost<CommonResponse<NotificationResponse>>(
    `${process.env.NEXT_PUBLIC_URL}v1/Pet/Update-Pet-Delete-State/${id}`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
