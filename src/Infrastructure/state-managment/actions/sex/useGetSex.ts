import { SexState } from "@/Domain/states/SexState";
import React from "react";
import useSelect from "../../useSelect";

const useGetSex = () => {
  const [sexState] = useSelect<SexState>((state) => state.sex);

  const getStoreSex = (): SexState => {
    return sexState();
  };

  return {
    getStoreSex,
  };
};

export default useGetSex;
