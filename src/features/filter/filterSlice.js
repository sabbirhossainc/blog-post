const { createSlice } = require("@reduxjs/toolkit");

// initial state
const initialState = {
  sortBy: "",
  filterStatus: "All",
  search: "",
};

// The slice
const filterSlice = createSlice({
  name: "filterPost",
  initialState,
  reducers: {
    statusChanged: (state, action) => {
      state.filterStatus = action.payload;
    },
    sortSelected: (state, action) => {
      state.sortBy = action.payload;
    },
    searched: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { statusChanged, sortSelected, searched } = filterSlice.actions;
