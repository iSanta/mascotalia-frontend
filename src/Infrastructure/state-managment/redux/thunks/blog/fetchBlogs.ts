import { getBlogs } from "@/Infrastructure/blog/get-blogs";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBlogs = createAsyncThunk(
  "blogs/fetchBlogs",
  async ({ page }: { page: string }) => {

    return {
      response: (await getBlogs(page)).value,
    };
  }
);
