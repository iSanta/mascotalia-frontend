import { getBlogsByTitle } from "@/Infrastructure/blog/get-blogs-by-title";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBlogsByTitle = createAsyncThunk(
  "blogs/fetchBlogsByTitle",
  async ({ title, page }: { title: string; page: string }) => {
    return {
      response: (await getBlogsByTitle(title, page)).value,
    };
  }
);
