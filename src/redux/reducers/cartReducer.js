import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existedProductIndex = state.cartItems.findIndex(
        (item) => item.id === product.id
      );
      if (existedProductIndex !== -1) {
        state.cartItems[existedProductIndex].qty += 1;
      } else {
        const newProduct = { ...product, qty: 1 };
        state.cartItems.push(newProduct);
      }
      toast.success("Item is added to the Cart");
    },
    clearCart: (state, action) => {
      state.cartItems = [];
    },
    decreaseItemQuantityByOne: (state, action) => {
      const product = action.payload;
      const existedProductIndex = state.cartItems.findIndex(
        (item) => item.id === product.id
      );
      if (state.cartItems[existedProductIndex].qty === 1) {
        state.cartItems.splice(existedProductIndex, 1);
        toast.success("Item is removed successfully !!");
      } else {
        state.cartItems[existedProductIndex].qty -= 1;
        toast.success("One quantity is removed from the cart");
      }
    },
    removeItemFromCart: (state, action) => {
      const product = action.payload;
      const existedProductIndex = state.cartItems.findIndex(
        (item) => item.id === product.id
      );
      state.cartItems.splice(existedProductIndex, 1);
      toast.success("Item is removed successfully !!");
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
export const cartSelector = (state) => state.cartReducer;
