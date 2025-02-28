import { AbstractMenu, AbstractMenuProps } from "@/Infrastructure/design-system";

export type MenuProps = AbstractMenuProps & {};

export function Menu(props: MenuProps) {
  return <AbstractMenu {...props} />;
}
