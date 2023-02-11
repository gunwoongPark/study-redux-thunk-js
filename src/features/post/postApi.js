import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPostList = createAsyncThunk(
  "postSlice/fetchPostList",
  async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return res.data;
  }
);

export const addPost = createAsyncThunk(
  "postSlice/addPost",
  async ({ title, body }) => {
    const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      title,
      body,
      userId: 11,
    });

    return res.data;
  }
);
