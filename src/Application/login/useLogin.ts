import { loginCall } from "@/Infrastructure/login";
import useLocalStorage from "../local-storage/useLocalStorage";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import useAuth from "@/Application/auth/useAuth";

const useLogin = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [errorKey, setErrorKey] = useState<number>(0);

  const { save } = useLocalStorage();
  const { push } = useRouter();
  const { authUser } = useAuth();

  const login = async (email: string, password: string): Promise<void> => {
    const res = await loginCall(email, password);

    if (res.success && res.data) {
      save("auth", res.data.value);
      push("/admin/login");
      return;
    }

    setErrorMessage(res.message);
    setErrorKey(prev => prev + 1);
  };

  useEffect(() => {
    if (authUser) {
      push("/admin/dashboard");
    }
  }, [authUser]);

  return { login, errorMessage, errorKey };
};

export default useLogin;
