import { getPosts } from "./postsAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

// initialize the state
const initialState = {
  posts: [],
  isLoading: false,
  isError: false,
  error: "",
};

// async thunk
export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async ({ sortBy, status ,search}) => {
    const post = await getPosts(status,search);
    // sort by the date
    if (sortBy === "newest") {
      post?.sort((x, y) => {
        let a = new Date(x.createdAt);
        let b = new Date(y.createdAt);
        return b - a;
      });
    }
    // sort by likes
    else if (sortBy === "most_liked") {
      post?.sort((x, y) => {
        return y.likes - x.likes;
      });
    }
    return post;
  }
);

// Slice

const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.posts = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default postsSlice.reducer;
