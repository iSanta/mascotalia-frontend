export type HttpResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};
