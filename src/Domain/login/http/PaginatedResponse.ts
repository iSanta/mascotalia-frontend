export type PaginatedResponse<T> = {
  success: boolean;
  message: string;
  value: {
    items: T;
    totalCount: number;
    pageSize: number;
    pageNumber: number;
    totalPages: number;
  };
};
