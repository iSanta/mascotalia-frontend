import { AbstractInputNumber, AbstractInputNumberProps } from "@/Infrastructure/design-system";

export type InputNumberProps = AbstractInputNumberProps & {};

export function InputNumber(props: InputNumberProps) {
  return <AbstractInputNumber {...props} />;
}
