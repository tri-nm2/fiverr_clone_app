// import {createSlice} from '@reduxjs/toolkit';
// import { fetchCategories } from './action';


// const categoriesSlice = createSlice({
//     name: 'categories',
//     initialState: {
//         categoriesData: [],
//         status: "idle"
//     },
//     reducers: {
//         addCategoriesData: (state, action) => {
//             state.categoriesData = action.payload;
//         }
//     },
//     extraReducers: builder => {
//         builder.addCase(fetchCategories.pending, (state,action) =>{
//             state.status = "loading";
//         }).addCase(fetchCategories.fulfilled, (state,action) => {
//             state.status = "fulfilled";
//             state.categoriesData = action.payload;
//         })
//     }
// });
// export default categoriesSlice;
import { createSlice} from '@reduxjs/toolkit';
import { DetailDataModel } from 'common/core/model/DetailDataModel';


import { fetchDataComment, fetchDataDetail, fetchDataUser } from './action';


const detailSlice = createSlice({
    name: 'detail',
    initialState:{
        status: 'idle',
        detailData:  [
            {
                id : 1,
                congViec : {
                    id: 0,
                    tenCongViec: "",
                    danhGia: 0,
                    giaTien: 0,
                    nguoiTao: 0,
                    hinhAnh: "",
                    moTa: "",
                    maChiTietLoaiCongViec: 0,
                    moTaNgan: "",
                    saoCongViec: 0,
                },
                tenLoaiCongViec : "",
                tenNhomChiTietLoai : "",
                tenChiTietLoai : "",
                tenNguoiTao : "string",
                avatar : "",
           
              }
        ],
        userData: [
            {
                "id": 0,
                "name": "",
                "email": "",
                "password": "",
                "phone": "",
                "birthday": "",
                "avatar": "",
                "gender": true,
                "role": "",
                "skill": [
                  "string"
                ],
                "certification": [
                  "string"
                ],
                "bookingJob": [
                  "string"
                ]
              }
        ],
        commentData: [
            {
                "ngayBinhLuan": "string",
                "noiDung": "string",
                "saoBinhLuan": 0,
                "tenNguoiBinhLuan": "string",
                "avatar": "string"
            },
        
        ]
    },
    reducers:{
        addDataDetail: (state, action) => {
            state.detailData = action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchDataDetail.pending, (state)=>{
            state.status = 'loading';
        }).addCase(fetchDataDetail.fulfilled, (state, action) => {
            state.detailData = action.payload;
        }).addCase(fetchDataUser.fulfilled, (state, action)=>{
            state.userData = action.payload;
        }).addCase(fetchDataComment.fulfilled, (state, action) =>{
            state.commentData = action.payload;
        })
    }
});

export default detailSlice;