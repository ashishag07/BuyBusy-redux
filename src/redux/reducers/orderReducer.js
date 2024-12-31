import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  orders: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      const cartObj = {
        id: state.orders.length + 1,
        createdOn: new Date().toLocaleDateString("en-GB"),
        purchasedItems: action.payload,
      };
      state.orders.push(cartObj);
      toast.success("Your Order is placed successfully !!");
    },
  },
});

export const orderReducer = orderSlice.reducer;
export const orderActions = orderSlice.actions;
export const orderSelector = (state) => state.orderReducer.orders;
