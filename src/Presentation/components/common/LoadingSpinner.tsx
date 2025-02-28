import { Spin } from "@/Presentation/design-system";
import React from "react";

const LoadingSpinner = ({ loading }) => {
  if (!loading) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <Spin spinning={loading} size="large" />
    </div>
  );
};

export default LoadingSpinner;
