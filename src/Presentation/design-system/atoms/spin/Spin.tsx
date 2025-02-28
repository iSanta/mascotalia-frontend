import { AbstractSpin, AbstractSpinProps } from "@/Infrastructure/design-system";

export type SpinProps = AbstractSpinProps & {};

export function Spin(props: SpinProps) {
  return <AbstractSpin {...props} />;
}
