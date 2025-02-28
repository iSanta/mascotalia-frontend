import { AbstractSlider, AbstractSliderProps } from "@/Infrastructure/design-system";

export type SliderProps = AbstractSliderProps & {};

export function Slider(props: SliderProps) {
  return <AbstractSlider {...props} />;
}
