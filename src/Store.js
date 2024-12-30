import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./redux/reducers/userReducer";
import { productReducer } from "./redux/reducers/productReducer";
import { cartReducer } from "./redux/reducers/cartReducer";

export const store = configureStore({
  reducer: { userReducer, productReducer, cartReducer },
});
