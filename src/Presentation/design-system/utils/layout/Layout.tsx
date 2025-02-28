import { AbstractLayout, AbstractLayoutProps } from "@/Infrastructure/design-system";

export type LayoutProps = AbstractLayoutProps & {};

export function Layout(props: LayoutProps) {
  return <AbstractLayout {...props} />;
}
