import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { WritableDraft } from "immer";
import { BlogState } from "@/Domain/states/BlogState";
import { fetchBlogsByTags } from "../fetchBlogsByTags";

export const fetchBlogsByTagsBuilder = (
  builder: ActionReducerMapBuilder<WritableDraft<BlogState>>
) => {
  builder
    .addCase(fetchBlogsByTags.pending, (state) => {
      state.status = "loading";
    })
    .addCase(fetchBlogsByTags.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.pagination.value = action.payload.response;
    })
    .addCase(fetchBlogsByTags.rejected, (state, action) => {
      state.status = "failed";
      state.errorMessage = action.error.message;
    });
};
