import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import postsReducer from "../features/posts/postsSlice";
import postReducer from "../features/post/postSlice";
import relatedPostsReducer from "../features/relatedPosts/relatedPostSlice";
import filterReducer from "../features/filter/filterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    post: postReducer,
    relatedPosts: relatedPostsReducer,
    filters: filterReducer,
  },
});
