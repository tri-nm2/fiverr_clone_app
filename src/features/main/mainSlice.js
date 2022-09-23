import { createSlice } from "@reduxjs/toolkit";
import { fetchMenuDataAction } from "./action";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    menuData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMenuDataAction.fulfilled, (state, action) => {
      state.menuData = action.payload;
    });
  },
});

export default mainSlice;
