import { AbstractTree, AbstractTreeProps } from "@/Infrastructure/design-system";

export type TreeProps = AbstractTreeProps & {};

export function Tree(props: TreeProps) {
  return <AbstractTree {...props} />;
}
