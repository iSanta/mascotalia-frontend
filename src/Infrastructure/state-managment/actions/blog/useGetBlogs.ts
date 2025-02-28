import { BlogState } from "@/Domain/states/BlogState";
import useSelect from "../../useSelect";
import useDispatch from "../../useDispatch";
import { fetchBlogsByTitle } from "../../redux/thunks/blog/fetchBlogsByTitle";
import { fetchBlogs } from "../../redux/thunks/blog/fetchBlogs";
import { fetchBlogsByTags } from "../../redux/thunks/blog/fetchBlogsByTags";

const useGetBlogs = () => {
  const { dispatchAction } = useDispatch();
  const [blogsState] = useSelect<BlogState>((state) => state.blog);

  const getStoreBlogsAsync = (page: string): void => {
    dispatchAction(fetchBlogs, { page });
  };

  const getStoreBlogsByTitleAsync = (title: string, page: string): void => {
    dispatchAction(fetchBlogsByTitle, { title, page });
  };

  const getStoreBlogsByTagsAsync = (tags: number[], page: string): void => {
    dispatchAction(fetchBlogsByTags, { tags, page });
  };

  const getStoreBlogs = (): BlogState => {
    return blogsState();
  };

  return { getStoreBlogs, getStoreBlogsAsync, getStoreBlogsByTitleAsync, getStoreBlogsByTagsAsync };
};

export default useGetBlogs;
