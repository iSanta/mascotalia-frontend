import { useState } from "react";

const useFindYourPetAnimations = (skip: boolean) => {
  const [active, setActive] = useState<boolean>(skip);

  const handleActive = () => {
    setActive(true);
  };

  const clearAnimations = () => {};

  return { active, handleActive, clearAnimations };
};

export default useFindYourPetAnimations;
