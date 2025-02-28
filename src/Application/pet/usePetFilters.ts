import { useState } from "react";

const usePetFilters = <T>(defaultValue: T) => {
  const [selectValue, setSelectValue] = useState<T>(defaultValue);

  return [selectValue, setSelectValue, defaultValue] as const;
};

export default usePetFilters;
