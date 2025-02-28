"use client";
import { useAppDispatch } from "./redux/store-hooks";

const useDispatch = () => {
  const dispatch = useAppDispatch();

  const dispatchAction = <T>(callback: Function, value?: T): void => {
    if (value) {
      dispatch(callback(value));
      return;
    }
    dispatch(callback());
  };

  return {
    dispatchAction,
  };
};

export default useDispatch;
