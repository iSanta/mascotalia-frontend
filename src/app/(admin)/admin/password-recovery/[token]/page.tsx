import PasswordRecoveryLayout from "@/Presentation/layout/password-recovery/PasswordRecoveryLayout";

export default async function passwordRecovery(props: { params: Promise<{ token: string }> }) {
    return <PasswordRecoveryLayout token={(await props.params).token} />;
}