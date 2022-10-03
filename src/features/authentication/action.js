import { createAsyncThunk } from "@reduxjs/toolkit";
import instace from "api/instance";

export const fetchUserInfoAction = createAsyncThunk(
  "authen/fetchUserInfo",
  async (userId) => {
    try {
      const response = await instace.request({
        url: `/api/users/${userId}`,
      });

      return response.data.content;
    } catch (error) {
      console.log(error.response.data.content);
    }
  }
);
