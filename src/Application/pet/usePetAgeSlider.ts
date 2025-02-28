import { useState } from "react";

const usePetAgeSlider = (initialMinValue: number, initialMaxValue: number) => {
  const [sliderMinValue, setSliderMinValue] = useState<number>(initialMinValue);
  const [sliderMaxValue, setSliderMaxValue] = useState<number>(initialMaxValue);

  const resetSlider = () => {
    setSliderMinValue(0);
    setSliderMaxValue(0);
  };

  return [
    sliderMinValue,
    setSliderMinValue,
    sliderMaxValue,
    setSliderMaxValue,
    resetSlider,
  ] as const;
};

export default usePetAgeSlider;
