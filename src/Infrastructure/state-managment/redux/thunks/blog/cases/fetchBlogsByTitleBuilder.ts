import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { WritableDraft } from "immer";
import { BlogState } from "@/Domain/states/BlogState";
import { fetchBlogsByTitle } from "../fetchBlogsByTitle";

export const fetchBlogsByTitleBuilder = (
  builder: ActionReducerMapBuilder<WritableDraft<BlogState>>
) => {
  builder
    .addCase(fetchBlogsByTitle.pending, (state) => {
      state.status = "loading";
    })
    .addCase(fetchBlogsByTitle.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.pagination.value = action.payload.response;
    })
    .addCase(fetchBlogsByTitle.rejected, (state, action) => {
      state.status = "failed";
      state.errorMessage = action.error.message;
    });
};
