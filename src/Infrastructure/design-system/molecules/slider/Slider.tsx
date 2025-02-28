import { Slider } from "antd";
import { SliderRangeProps } from "antd/es/slider";

export type AbstractSliderProps = SliderRangeProps;

export function AbstractSlider(props: AbstractSliderProps) {
  return <Slider {...props} />;
}
