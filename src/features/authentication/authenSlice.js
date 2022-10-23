import { createSlice } from "@reduxjs/toolkit";
import { fetchUserInfoAction } from "./action";

const authenSlice = createSlice({
  name: "authentication",
  initialState: {
    userInfo: null,
  },
  reducers: {
    addUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    clearUserInfo: (state) => {
      state.userInfo = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserInfoAction.fulfilled, (state, action) => {
      state.userInfo = action.payload;
    });
  },
});

export default authenSlice;
