import { getPost } from "./postAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

// initialize the state
const initialState = {
  post: {},
  isLoading: false,
  isError: false,
  error: "",
};

// async thunk
export const fetchPost = createAsyncThunk("post/fetchPost", async (id) => {
  const post = await getPost(id);
  return post;
});

// Slice

const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPost.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.post = action.payload;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.isLoading = false;
        state.post = {};
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default postSlice.reducer;
