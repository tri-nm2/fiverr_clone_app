import { createSlice } from "@reduxjs/toolkit";
import { fetchUserInfoAction } from "./action";

const authenSlice = createSlice({
  name: "authentication",
  initialState: {
    userInfo: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserInfoAction.fulfilled, (state, action) => {
      state.userInfo = action.payload;
    });
  },
});

export default authenSlice;
