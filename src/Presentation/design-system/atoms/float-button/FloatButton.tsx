import { AbstractFloatButton, AbstractFloatButtonProps } from "@/Infrastructure/design-system";

export type FloatButtonProps = AbstractFloatButtonProps & {};

export function FloatButton(props: FloatButtonProps) {
  return <AbstractFloatButton {...props} />;
}
