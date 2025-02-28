import { AbstractSwitch, AbstractSwitchProps } from "@/Infrastructure/design-system";

export type SwitchProps = AbstractSwitchProps & {};

export function Switch(props: SwitchProps) {
  return <AbstractSwitch {...props} />;
}
