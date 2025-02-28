import { RequestType } from "@/Domain/states/BlogState";
import useBlog from "./useBlog";

const useBlogRequestStrategy = () => {
  const { getBlogsAsync, getBlogsByTagAsync, getBlogsByTitleAsync } = useBlog();

  const requestSelector = (requestType: RequestType, page: string, data?: any) => {
    switch (requestType) {
      case "default":
        getBlogsAsync(page);
        return;

      case "tags":
        getBlogsByTagAsync(data, page);
        return;

      case "textSearch":
        getBlogsByTitleAsync(data, page);
        return;

      default:
        return;
    }
  };

  return { requestSelector };
};

export default useBlogRequestStrategy;
