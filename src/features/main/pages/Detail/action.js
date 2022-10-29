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

export const fetchDataDetail = createAsyncThunk('detail/addDataDetail', async (id) => {
    try{
        const result = await instace.request({
            url: "/api/cong-viec/lay-cong-viec-chi-tiet/" + id,
        })
       
        return result.data.content;
        
    }catch(err){
        console.log(err);
    }
});

export const fetchDataUser= createAsyncThunk('user/addUserData', async (name) => {
    try{
        const result = await instace.request({
            url: "/api/users/search/" + name,
        })
       
        // console.log(result.data.content);
       
        return result.data.content;
    }catch(err){
        console.log(err);
    }
})
export const fetchDataComment= createAsyncThunk('comment/addDataComment', async (id) => {
    try{
        const result = await instace.request({
            url: "/api/binh-luan/lay-binh-luan-theo-cong-viec/"+id,
        })
        
        return [{
            data : result.data.content,
            status: true,
            message: "Lay du lieu thanh cong",
        }];
        
        
    }catch(err){
        return [{
            status: false,
            message: "Khong doc duoc du lieu Binh luan tu server"
        }]
    }
})