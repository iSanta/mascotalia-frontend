import { AbstractPagination, AbstractPaginationProps } from "@/Infrastructure/design-system";

export type PaginationProps = AbstractPaginationProps & {};

export function Pagination(props: PaginationProps) {
  return <AbstractPagination {...props} />;
}
