import { setUserCity } from "../../redux/reducers/userSlice";
import useDispatch from "../../useDispatch";

const useSetUserInfo = () => {
  const { dispatchAction } = useDispatch();
  const setCity = (city: string) => {
    dispatchAction<string>(setUserCity, city);
  };
  return { setCity };
};

export default useSetUserInfo;
