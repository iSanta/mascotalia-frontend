import { AbstractCollapse, AbstractCollapseProps } from "@/Infrastructure/design-system";

export type CollapseProps = AbstractCollapseProps & {};

export function Collapse(props: CollapseProps) {
  return <AbstractCollapse {...props} />;
}
