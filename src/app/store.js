import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "features/main/mainSlice";
import authenReducer from "features/authentication/authenSlice";
import categoriesReducer from "features/main/pages/Categories/categoriesSlice";
import detailReducer from "features/main/pages/Detail/detailSlice";
const store = configureStore({
  reducer: {
    main: mainReducer.reducer,
    authen: authenReducer.reducer,
    categories: categoriesReducer.reducer,
    detail: detailReducer.reducer,
  },
});

export default store;
