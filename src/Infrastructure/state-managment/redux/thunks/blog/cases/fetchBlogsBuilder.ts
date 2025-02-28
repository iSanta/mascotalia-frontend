import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { WritableDraft } from "immer";
import { fetchBlogs } from "../fetchBlogs";
import { BlogState } from "@/Domain/states/BlogState";

export const fetchBlogsBuilder = (builder: ActionReducerMapBuilder<WritableDraft<BlogState>>) => {
  builder
    .addCase(fetchBlogs.pending, (state) => {
      state.status = "loading";
    })
    .addCase(fetchBlogs.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.pagination.value = action.payload.response;
    })
    .addCase(fetchBlogs.rejected, (state, action) => {
      state.status = "failed";
      state.errorMessage = action.error.message;
    });
};
