import { AbstractCheckbox, AbstractCheckboxProps } from "@/Infrastructure/design-system";

export type CheckboxProps = AbstractCheckboxProps & {};

export function Checkbox(props: CheckboxProps) {
  return <AbstractCheckbox {...props} />;
}
