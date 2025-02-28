import { AbstractInput, AbstractInputProps } from "@/Infrastructure/design-system";

export type InputProps = AbstractInputProps & {};

export function Input(props: InputProps) {
  return <AbstractInput {...props} />;
}
