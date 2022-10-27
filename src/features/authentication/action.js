import { createAsyncThunk } from "@reduxjs/toolkit";
import instace from "api/instance";
import AuthenSlice from "./authenSlice";

export const signInAction = (info, history) => {
  return async (dispatch) => {
    try {
      const response = await instace.request({
        url: "/api/auth/signin",
        method: "POST",
        data: info,
      });

      if (response.status === 200) {
        localStorage.setItem("id", response.data.content.user.id);
        localStorage.setItem("token", response.data.content.token);
        dispatch(fetchUserRentJob());
        dispatch(AuthenSlice.actions.addUserInfo(response.data.content.user));
        history.push("/");
      }
    } catch (error) {
      console.log(error.response?.data.content);
    }
  };
};

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
export const fetchUserRentJob = createAsyncThunk(
  "authen/fetchUserRentJob",
  async () => {
    try {
      const response = await instace.request({
        url: `/api/thue-cong-viec/lay-danh-sach-da-thue`,
      });
      return response.data.content;
    } catch (error) {
      console.log(error.response.data.content);
    }
  }
);
