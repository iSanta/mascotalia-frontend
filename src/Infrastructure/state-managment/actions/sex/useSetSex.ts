import { Sex } from "@/Domain/pet/sex/Sex";
import useDispatch from "@/Infrastructure/state-managment/useDispatch";
import { setPetSex } from "../../redux/reducers/sexSlice";
import { CommonResponse } from "@/Domain/common/CommonResponse";

const useSetSex = () => {
  const { dispatchAction } = useDispatch();

  const setStoreSex = (sex: CommonResponse<Sex[]>) => {
    dispatchAction<CommonResponse<Sex[]>>(setPetSex, sex);
  };

  return {
    setStoreSex,
  };
};

export default useSetSex;
