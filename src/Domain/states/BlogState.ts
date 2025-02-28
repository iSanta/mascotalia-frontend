import { Blog } from "../blog/Blog";
import { FetchStatus } from "../common/FetchStatus";
import { PaginatedResponse } from "../login/http/PaginatedResponse";

export type RequestType = "default" | "textSearch" | "tags";

export interface BlogState extends FetchStatus {
  blogRequestData: any;
  requestType: RequestType;
  pagination: PaginatedResponse<Blog[]>;
}
