import useGetUserInfo from "@/Infrastructure/state-managment/actions/user/useGetUserInfo";
import useSetUserInfo from "@/Infrastructure/state-managment/actions/user/useSetUserInfo";

const useUser = () => {
  const { getStoreCity } = useGetUserInfo();
  const { setCity } = useSetUserInfo();

  const getCity = (): string => {
    return getStoreCity();
  };

  const setUserCity = (city: string): void => {
    setCity(city);
  };

  return { setUserCity, getCity };
};

export default useUser;
