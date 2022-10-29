import { createSlice } from "@reduxjs/toolkit";
import { fetchMenuDataAction } from "./action";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    menuData: [],
    filter: {
      filterText: "",
      status: false,
    },
  },
  reducers: {
    addFilterText: (state, action) =>{
      state.filter.filterText = action.payload;
      state.filter.status = true;
    },
    clearFilterText: (state, action) => {
      state.filter.status = false;
      state.filter.filterText = "";
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMenuDataAction.fulfilled, (state, action) => {
      state.menuData = action.payload;
    });
  },
});

export default mainSlice;
