import { AuthRoles } from "./AuthRoles";

export type AuthUser = {
    username: string;
    roles: AuthRoles[];
    name: string;
    logo: string;
};
