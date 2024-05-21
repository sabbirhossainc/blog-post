import { getPost, patchPost } from "./postAPI";
import { isBoolean } from "../../utils/Boolean";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

// initialize the state
const initialState = {
  post: {},
  isLoading: false,
  isUpdating: false,
  isError: false,
  error: "",
};

// async thunks
export const fetchPost = createAsyncThunk("post/fetchPost", async (id) => {
  const post = await getPost(id);
  return post;
});

export const updatePost = createAsyncThunk(
  "post/updatePost",
  async (id, mutaionData) => {
    const updatedPost = await patchPost(id, mutaionData);
    return updatedPost;
  }
);

// Slice
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPost.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.post = action.payload;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
        state.post = {};
      });

    // update post
    builder
      .addCase(updatePost.pending, (state) => {
        state.isUpdating = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        const { likes: updateLikes, isSaved: updateSaved } =
          action.payload || {};
        const { likes, isSaved } = state.post;

        state.isUpdating = false;
        state.post.likes = updateLikes || likes;
        state.post.isSaved = isBoolean(updateSaved) ? updateSaved : isSaved;
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.isUpdating = false;
        state.isError = true;
        state.error = action.error?.message;
        state.post = {};
      });
  },
});

export default postSlice.reducer;
