import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/posts/posts";
import commentReducer from "../features/comments/comments";

export const store = configureStore({
    reducer: {
        posts: postReducer,
        comments: commentReducer,
    }
});