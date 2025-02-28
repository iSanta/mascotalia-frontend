import { AbstractTreeSelect, AbstractTreeSelectProps } from "@/Infrastructure/design-system";

export type TreeSelectProps = AbstractTreeSelectProps & {};

export function TreeSelect(props: TreeSelectProps) {
  return <AbstractTreeSelect {...props} />;
}
