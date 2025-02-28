import { AbstractTable, AbstractTableProps } from "@/Infrastructure/design-system";

export type TableProps = AbstractTableProps & {};

export function Table(props: TableProps) {
  return <AbstractTable {...props} />;
}
