import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../features/post/postSlice";

const store = configureStore({ reducer: { post: postSlice.reducer } });

export default store;
