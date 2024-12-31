import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./redux/reducers/userReducer";
import { productReducer } from "./redux/reducers/productReducer";
import { cartReducer } from "./redux/reducers/cartReducer";
import { orderReducer } from "./redux/reducers/orderReducer";

export const store = configureStore({
  reducer: { userReducer, productReducer, cartReducer, orderReducer },
});
