import { Blog } from "@/Domain/blog/Blog";
import { CommonResponse } from "@/Domain/common/CommonResponse";
import { PaginatedResponse } from "@/Domain/login/http/PaginatedResponse";
import { BlogState, RequestType } from "@/Domain/states/BlogState";
import useBlogRequestType from "@/Infrastructure/state-managment/actions/blog/request-type/useBlogRequestType";
import useBlogRequestData from "@/Infrastructure/state-managment/actions/blog/useBlogRequestData";
import useGetBlogs from "@/Infrastructure/state-managment/actions/blog/useGetBlogs";
import useSetBlogs from "@/Infrastructure/state-managment/actions/blog/useSetBlogs";

const useBlog = () => {
  const { setStoreBlogs } = useSetBlogs();

  const { getStoreBlogs, getStoreBlogsAsync, getStoreBlogsByTitleAsync, getStoreBlogsByTagsAsync } =
    useGetBlogs();

  const { getStoreBlogRequestType, setStoreBlogRequestType } = useBlogRequestType();

  const { getStoreBlogRequestData, setStoreBlogRequestData } = useBlogRequestData();

  const getBlogsAsync = (page: string) => {
    getStoreBlogsAsync(page);
  };

  const getBlogsByTitleAsync = (title: string, page: string) => {
    getStoreBlogsByTitleAsync(title, page);
  };

  const getBlogsByTagAsync = (tags: number[], page: string) => {
    getStoreBlogsByTagsAsync(tags, page);
  };

  const setBlogs = (blogs: PaginatedResponse<Blog[]>) => {
    setStoreBlogs(blogs);
  };

  const getBlogs = (): BlogState => {
    return getStoreBlogs();
  };

  const getBlogRequestType = (): RequestType => {
    return getStoreBlogRequestType();
  };

  const setBlogRequestType = (requestType: RequestType) => {
    setStoreBlogRequestType(requestType);
  };

  const getBlogRequestData = () => {
    return getStoreBlogRequestData();
  };

  const setBlogRequestData = (requestType: any) => {
    setStoreBlogRequestData(requestType);
  };

  return {
    setBlogs,
    getBlogs,
    getBlogsAsync,
    getBlogsByTitleAsync,
    getBlogsByTagAsync,
    getBlogRequestType,
    setBlogRequestType,
    getBlogRequestData,
    setBlogRequestData,
  };
};

export default useBlog;
