import { BlogState, RequestType } from "@/Domain/states/BlogState";
import { setRequestData, setRequestType } from "@/Infrastructure/state-managment/redux/reducers/blogSlice";
import useDispatch from "@/Infrastructure/state-managment/useDispatch";
import useSelect from "@/Infrastructure/state-managment/useSelect";

const useBlogRequestData = () => {
  const { dispatchAction } = useDispatch();
  const [blogRequestData] = useSelect<BlogState>((state) => state.blog);

  const getStoreBlogRequestData = () => {
    return blogRequestData().blogRequestData;
  };

  const setStoreBlogRequestData = (requestType: RequestType): void => {
    dispatchAction(setRequestData, requestType);
  };

  return { getStoreBlogRequestData, setStoreBlogRequestData };
};

export default useBlogRequestData;
