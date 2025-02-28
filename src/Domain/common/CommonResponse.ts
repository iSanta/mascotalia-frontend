export type CommonResponse<T> = {
  message: string;
  success: boolean;
  value: T;
};
