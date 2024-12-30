import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./redux/reducers/userReducer";
import { productReducer } from "./redux/reducers/productReducer";

export const store = configureStore({
  reducer: { userReducer, productReducer },
});
