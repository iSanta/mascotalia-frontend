import { getBlogsByTag } from "@/Infrastructure/blog/get-blogs-by-tag";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBlogsByTags = createAsyncThunk(
  "blogs/fetchBlogsByTags",
  async ({ tags, page }: { tags: number[]; page: string }) => {

    return {
      response: (await getBlogsByTag(tags, page)).value,
    };
  }
);
