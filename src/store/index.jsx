import { configureStore } from "@reduxjs/toolkit";
import heroReducer from "./heroSlice";
import uiReducer from "./uiSlice";

const store = configureStore({
  reducer: {
    hero: heroReducer,
    ui:uiReducer,
  },
});

export default store;
