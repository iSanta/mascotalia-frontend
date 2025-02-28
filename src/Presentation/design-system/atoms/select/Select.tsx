import { AbstractSelect, AbstractSelectProps } from "@/Infrastructure/design-system";

export type SelectProps = AbstractSelectProps & {};

export function Select(props: SelectProps) {
  return <AbstractSelect {...props} />;
}
