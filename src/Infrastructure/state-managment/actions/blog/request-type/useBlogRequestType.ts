import { BlogState, RequestType } from "@/Domain/states/BlogState";
import { setRequestType } from "@/Infrastructure/state-managment/redux/reducers/blogSlice";
import useDispatch from "@/Infrastructure/state-managment/useDispatch";
import useSelect from "@/Infrastructure/state-managment/useSelect";

const useBlogRequestType = () => {
  const { dispatchAction } = useDispatch();
  const [blogsState] = useSelect<BlogState>((state) => state.blog);

  const getStoreBlogRequestType = (): RequestType => {
    return blogsState().requestType;
  };

  const setStoreBlogRequestType = (requestType: RequestType): void => {
    dispatchAction(setRequestType, requestType);
  };

  return { getStoreBlogRequestType, setStoreBlogRequestType };
};

export default useBlogRequestType;
