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

import { fetchCategoriesData } from './action';


const categoriesSlice = createSlice({
    name: 'categories',
    initialState:{
        status: 'idle',
        categoriesData: [],
    },
    reducers:{
        addDataCategories: (state, action) => {
            state.categoriesData = action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchCategoriesData.pending, (state)=>{
            state.status = 'loading';
        }).addCase(fetchCategoriesData.fulfilled, (state, action) => {
            state.categoriesData = action.payload;
        })
    }
});

export default categoriesSlice;