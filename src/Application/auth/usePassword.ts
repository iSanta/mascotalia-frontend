import { NotificationType } from "@/Domain/common/notification/NotificationType";
import { changePassword } from "@/Infrastructure/auth/change-password";
import { rememberPassword } from "@/Infrastructure/auth/remember-password";
import { useRouter } from "next/navigation";
import { useState } from "react";

const usePassword = () => {
    const { push } = useRouter();
    const [recoveryPasswordMessage, setRecoveryPasswordMessage] = useState<{ notificationType: NotificationType, message: string }>(null);
    const [updatePasswordMessage, setUpdatePasswordMessage] = useState<{ notificationType: NotificationType, message: string }>(null);

    const updatePassword = async (token: string, password: string): Promise<void> => {
        const res = await changePassword(token, password);

        if (res.success) {
            setUpdatePasswordMessage({
                notificationType: "success",
                message: res.message
            });

            setTimeout(() => {
                push("/admin/login");
            }, 2000);

            return;
        }

        setUpdatePasswordMessage({
            notificationType: "error",
            message: res.message
        });
    }

    const passwordRecovery = async (email: string): Promise<void> => {
        const res = await rememberPassword(email);

        setRecoveryPasswordMessage({
            notificationType: res.success ? "success" : "error",
            message: res.message
        });
    }

    return { updatePassword, updatePasswordMessage, passwordRecovery, recoveryPasswordMessage }
}

export default usePassword