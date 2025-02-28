import { AbstractDivider, AbstractDividerProps } from "@/Infrastructure/design-system";

export type DividerProps = AbstractDividerProps & {};

export function Divider(props: DividerProps) {
  return <AbstractDivider {...props} />;
}
