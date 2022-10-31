// import { createAsyncThunk } from "@reduxjs/toolkit";
// import instace from "api/instance";

// export const fetchCategories = createAsyncThunk('categories/addDataCategories', async() => {
//     try{
//         const result = await instace.request({
//             url: "/api/cong-viec/lay-menu-loai-cong-viec",
//         });
//         return result.data.content;
//     }catch (err){

//     }
// });
import { createAsyncThunk } from "@reduxjs/toolkit";
import instace from "api/instance";
import { result } from "lodash";

export const fetchCategoriesData = createAsyncThunk('categories/addDataCategories', async (id) => {
    try{
        const result = await instace.request({
            url: "/api/cong-viec/lay-cong-viec-theo-chi-tiet-loai/" + id,
        })
       
        return result.data.content;
        
    }catch(err){
        console.log(err);
        return []

    }
})
export const fetchCategoriesDataWithText = createAsyncThunk('categories/addDataCategoriesWithText', async (text) => {
    try{
        const result = await instace.request({
            url: "/api/cong-viec/lay-danh-sach-cong-viec-theo-ten/" + text,
        })
        return result.data.content;
    }catch(err){
        console.log(err);
        return [];
    }
})