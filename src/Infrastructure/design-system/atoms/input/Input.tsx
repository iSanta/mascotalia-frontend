import { Input, InputProps } from "antd";

export type AbstractInputProps = InputProps & {};

export function AbstractInput(props: AbstractInputProps) {
  return <Input {...props} />;
}
