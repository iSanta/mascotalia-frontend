import { AbstractDropdown, AbstractDropdownProps } from "@/Infrastructure/design-system";

export type DropdownProps = AbstractDropdownProps & {};

export function Dropdown(props: DropdownProps) {
  return <AbstractDropdown {...props} />;
}
