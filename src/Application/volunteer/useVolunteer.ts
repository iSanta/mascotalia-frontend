import { CreateVolunteer } from "@/Domain/volunteer/CreateVolunteer"
import { useState } from "react";
import { validateFormDataEmpty } from "../utils/validateFormDataEmpty";
import { NotificationResponse } from "@/Domain/common/notification/NotificationResponse";
import { withAuthTokenAsync } from "../auth/withAuthToken";
import { createVolunteer } from "@/Infrastructure/volunteer/create-volunteer";
import useTranslate from "../translate/useTranslate";

const useVolunteer = () => {
    const { t } = useTranslate();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const create = async (volunteer: CreateVolunteer): Promise<NotificationResponse> => {
        setIsLoading(true);

        const formData = new FormData();
        formData.append("createVolunteerDTO.campaignId", volunteer.campaignId);
        formData.append("createVolunteerDTO.name", volunteer.name);
        formData.append("createVolunteerDTO.contactPhone", volunteer.contactPhone);
        formData.append("createVolunteerDTO.email", volunteer.email);

        if (validateFormDataEmpty(formData)) {
            return {
                message: "Formulario vacío",
                status: "error",
            };
        };

        const createVolunteerWithAuth = withAuthTokenAsync<typeof createVolunteer>(createVolunteer);
        const response = await createVolunteerWithAuth(formData);
        console.log(response)
        setIsLoading(false);

        return {
            message: response.success ? t("Registered Volunteer") : response.message,
            status: response.success ? "success" : "error",
        };
    }

    return { create, isLoading }
}

export default useVolunteer