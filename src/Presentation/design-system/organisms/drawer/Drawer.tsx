import { AbstractDrawer, AbstractDrawerProps } from "@/Infrastructure/design-system";

export type DrawerProps = AbstractDrawerProps & {};

export function Drawer(props: DrawerProps) {
  return <AbstractDrawer {...props} />;
}
