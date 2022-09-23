import { createAsyncThunk } from "@reduxjs/toolkit";
import instace from "api/instance";

export const fetchMenuDataAction = createAsyncThunk(
  "main/addMenuData",
  async () => {
    try {
      const response = await instace.request({
        url: "/api/cong-viec/lay-menu-loai-cong-viec",
      });

      return response.data.content;
    } catch (error) {}
  }
);
