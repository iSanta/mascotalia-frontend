import { httpPost } from "@/Application/http";

export const createVolunteer = async (volunteer: FormData, token: string) => {
  return await httpPost(`${process.env.NEXT_PUBLIC_URL}v1/Volunteer`,
    volunteer,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
};
