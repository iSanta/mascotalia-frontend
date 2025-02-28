import { AuthRoles } from "@/Domain/auth/AuthRoles";
import { AuthUser } from "@/Domain/auth/AuthUser";
import { getAuthUser } from "@/Infrastructure/auth/get-auth-user-info";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getAuthToken } from "../utils/getAuthToken";
import { withAuthTokenAsync } from "./withAuthToken";


type UseAuthProps = {
  authorizedRoles?: AuthRoles[] | [];
};

const useAuth = ({ authorizedRoles }: UseAuthProps = {}) => {
  const [authUser, setAuthUser] = useState<AuthUser>(undefined);
  const { push } = useRouter();

  const getAuthUserInfo = async () => {
    const token = getAuthToken();
    if (token === null) {
      setAuthUser(null);
      return;
    }

    const getAuthUserWithAuth = withAuthTokenAsync<typeof getAuthUser>(getAuthUser);
    const res = await getAuthUserWithAuth(token);

    if (!res) {
      push("/admin/login");
      return;
    }
    setAuthUser(res.data.value);
  };

  const validateUser = (): string => {
    const token = getAuthToken();
    if (token === null) {
      push("/admin/login");
      return "";
    }

    return token;
  };

  /*
    Se usa para limitar el ingreso a una ruta basado en los roles del usuario
    más común para restringir acceso
  */
  const canEnterRoute = (): boolean => {
    if (!authorizedRoles || !authorizedRoles.length) return true;
    if (authUser === null) return false;
    return authorizedRoles.some((role) => authUser.roles.includes(role));
  };

  /*
    Se usa para validar los roles de autorización con los roles del usuario
    más común para renderizar componentes
  */

  const userHasRole = (roles: AuthRoles[]): boolean => {
    if (!authUser) return false;
    roles = ["Admin", ...roles]
    return roles.some((role) => authUser.roles.includes(role));
  }

  const authRedirect = () => {
    if (!canEnterRoute() || authUser === null) {
      push("/admin/login");
      return;
    }
  };

  useEffect(() => {
    (async () => {
      await getAuthUserInfo();
    })();
  }, []);

  useEffect(() => {
    authUser !== undefined && authorizedRoles && authorizedRoles.length && authRedirect();
  }, [authUser]);



  return { authUser, validateUser, userHasRole };
};

export default useAuth;
