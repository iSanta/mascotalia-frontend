import { AbstractTabs, AbstractTabsProps } from "@/Infrastructure/design-system";

export type TabsProps = AbstractTabsProps & {};

export function Tabs(props: TabsProps) {
  return <AbstractTabs {...props} />;
}
