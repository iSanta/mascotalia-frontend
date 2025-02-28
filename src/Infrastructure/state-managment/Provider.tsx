import React from "react";
import StoreProvider from "./redux/components/StoreProvider";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return <StoreProvider>{children}</StoreProvider>;
};

export default Provider;
