import { UserState } from "@/Domain/states/UserState";
import useSelect from "../../useSelect";

const useGetUserInfo = () => {
  const [userState] = useSelect<UserState>((state) => state.user);

  const getStoreCity = (): string => {
    return userState().city;
  };

  return { getStoreCity };
};

export default useGetUserInfo;
