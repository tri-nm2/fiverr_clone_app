import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "features/main/mainSlice";

const store = configureStore({
  reducer: {
    main: mainReducer.reducer,
  },
});

export default store;
