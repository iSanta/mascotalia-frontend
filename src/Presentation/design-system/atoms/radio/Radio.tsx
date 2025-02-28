import { AbstractRadio, AbstractRadioProps } from "@/Infrastructure/design-system";

export type RadioProps = AbstractRadioProps & {};

export function Radio(props: RadioProps) {
  return <AbstractRadio {...props} />;
}
