import { getRelatedPosts } from "./relatedPostsAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

// initialize the state
const initialState = {
  relatedPosts: [],
  isLoading: false,
  isError: false,
  error: "",
};

// async thunk
export const fetchRelatedPosts = createAsyncThunk("relatedPosts/fetchRelatedPosts", async ({id, tags}) => {
  const relatedPosts = await getRelatedPosts({id,tags});
  return relatedPosts;
});

// Slice

const relatedPostsSlice = createSlice({
  name: "relatedPosts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedPosts.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchRelatedPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedPosts = action.payload;
      })
      .addCase(fetchRelatedPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.relatedPosts = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default relatedPostsSlice.reducer;
