import Pagination from "@/Presentation/components/Pagination";

export type AbstractPaginationProps = {
  onChange: (n: number) => void;
  maxPages: number;
  initialCurrentPage?: number;
};

export function AbstractPagination(props: AbstractPaginationProps) {
  return <Pagination {...props} />;
}
