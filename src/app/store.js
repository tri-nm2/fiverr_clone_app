import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "features/main/mainSlice";
import authenReducer from "features/authentication/authenSlice";

const store = configureStore({
  reducer: {
    main: mainReducer.reducer,
    authen: authenReducer.reducer,
  },
});

export default store;
