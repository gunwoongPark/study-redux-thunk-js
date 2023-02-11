import { createSlice } from "@reduxjs/toolkit";
import { addPost, fetchPostList } from "./postApi";

const postSlice = createSlice({
  name: "post",
  initialState: { loading: false, status: "", postList: [] },
  extraReducers: {
    [fetchPostList.pending]: (state) => {
      state.loading = true;
      state.status = "pending";
    },
    [addPost.pending]: (state) => {
      state.loading = true;
      state.status = "pending";
    },

    [fetchPostList.fulfilled]: (state, action) => {
      state.postList = action.payload;
      state.loading = false;
      state.status = "fulfilled";
    },
    [addPost.fulfilled]: (state, action) => {
      state.postList.push(action.payload);
      state.loading = false;
      state.status = "fulfilled";
    },

    [fetchPostList.rejected]: (state) => {
      state.loading = false;
      state.status = "rejected";
    },
    [addPost.rejected]: (state) => {
      state.loading = false;
      state.status = "rejected";
    },
  },
});

export default postSlice;
