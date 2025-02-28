import { Blog } from "@/Domain/blog/Blog";
import useDispatch from "../../useDispatch";
import { PaginatedResponse } from "@/Domain/login/http/PaginatedResponse";
import { setBlogs } from "../../redux/reducers/blogSlice";
import { CommonResponse } from "@/Domain/common/CommonResponse";

const useSetBlogs = () => {
  const { dispatchAction } = useDispatch();

  const setStoreBlogs = (pets: PaginatedResponse<Blog[]>) => {
    dispatchAction<PaginatedResponse<Blog[]>>(setBlogs, pets);
  };

  return {
    setStoreBlogs,
  };
};

export default useSetBlogs;
