import { CommonResponse } from "@/Domain/common/CommonResponse";
import { Sex } from "@/Domain/pet/sex/Sex";
import { SexState } from "@/Domain/states/SexState";
import useGetSex from "@/Infrastructure/state-managment/actions/sex/useGetSex";
import useSetSex from "@/Infrastructure/state-managment/actions/sex/useSetSex";

const useSex = () => {
  const { setStoreSex } = useSetSex();
  const { getStoreSex } = useGetSex();

  const saveSex = (sex: CommonResponse<Sex[]>) => {
    setStoreSex(sex);
  };

  const getSex = (): SexState => {
    return getStoreSex();
  };

  return {
    saveSex,
    getSex,
  };
};

export default useSex;
