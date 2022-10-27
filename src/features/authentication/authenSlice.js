import { createSlice } from "@reduxjs/toolkit";
import { fetchUserInfoAction, fetchUserRentJob } from "./action";

const authenSlice = createSlice({
  name: "authentication",
  initialState: {
    userInfo: null,
    userRentJob: [
      {
        "id": "",
        "ngayThue": "string",
        "hoanThanh": false,
        "congViec": {
          "id": 0,
          "tenCongViec": "",
          "danhGia": 0,
          "giaTien": 0,
          "nguoiTao": 0,
          "hinhAnh": "",
          "moTa": "",
          "maChiTietLoaiCongViec": 0,
          "moTaNgan": "",
          "saoCongViec": 0
        }
      },
    ],
  },
  reducers: {
    addUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    clearUserInfo: (state) => {
      state.userInfo = null;
    },
    clearUserRentJob: (state) => {
      state.userRentJob = [
        {
          "id": "",
          "ngayThue": "string",
          "hoanThanh": false,
          "congViec": {
            "id": 0,
            "tenCongViec": "",
            "danhGia": 0,
            "giaTien": 0,
            "nguoiTao": 0,
            "hinhAnh": "",
            "moTa": "",
            "maChiTietLoaiCongViec": 0,
            "moTaNgan": "",
            "saoCongViec": 0
          }
        },
      ];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserInfoAction.fulfilled, (state, action) => {
      state.userInfo = action.payload;
    }).addCase(fetchUserRentJob.fulfilled, (state, action) => {
      state.userRentJob = action.payload;
    });
  },
});

export default authenSlice;
