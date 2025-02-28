import { AbstractRow, AbstractRowProps } from "@/Infrastructure/design-system";

export type RowProps = AbstractRowProps & {};

export function Row(props: RowProps) {
  return <AbstractRow {...props} />;
}
