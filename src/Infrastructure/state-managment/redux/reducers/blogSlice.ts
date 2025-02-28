import { Blog } from "@/Domain/blog/Blog";
import { PaginatedResponse } from "@/Domain/login/http/PaginatedResponse";
import { BlogState, RequestType } from "@/Domain/states/BlogState";
import { createSlice } from "@reduxjs/toolkit";
import { fetchBlogsBuilder } from "../thunks/blog/cases/fetchBlogsBuilder";
import { fetchBlogsByTitleBuilder } from "../thunks/blog/cases/fetchBlogsByTitleBuilder";
import { fetchBlogsByTagsBuilder } from "../thunks/blog/cases/fetchBlogsByTagsBuilder";

const initialState: BlogState = {
  status: "idle",
  errorMessage: "",
  pagination: {
    success: false,
    message: "",
    value: {
      items: [],
      totalCount: 0,
      pageSize: 0,
      pageNumber: 0,
      totalPages: 0,
    },
  },
  blogRequestData: undefined,
  requestType: "default",
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setBlogs: (
      state,
      action: {
        payload: PaginatedResponse<Blog[]>;
        type: string;
      }
    ) => {
      state.pagination.success = action.payload.success;
      state.pagination.value = action.payload.value;
    },
    setRequestType: (
      state,
      action: {
        payload: RequestType;
        type: string;
      }
    ) => {
      state.requestType = action.payload;
    },
    setRequestData: (
      state,
      action: {
        payload: any;
        type: string;
      }
    ) => {
      state.blogRequestData = action.payload;
    },
  },
  extraReducers: (builder) => {
    fetchBlogsBuilder(builder);
    fetchBlogsByTitleBuilder(builder);
    fetchBlogsByTagsBuilder(builder);
  },
});

export const { setBlogs, setRequestType, setRequestData } = blogSlice.actions;
export default blogSlice.reducer;
