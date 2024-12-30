import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/reducers/cartReducer";
const orderContext = createContext();

export const useOrderVal = () => {
  const value = useContext(orderContext);
  return value;
};

const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const dispatch = useDispatch();

  const addOrder = (cartItem) => {
    const cartObj = {
      id: orders.length + 1,
      createdOn: new Date().toLocaleDateString("en-GB"),
      purchasedItems: cartItem,
    };

    setOrders((prev) => [...prev, cartObj]);
    // clearCart();
    dispatch(cartActions.clearCart());
    toast.success("Your Order is placed successfully !!");
  };
  return (
    <orderContext.Provider value={{ orders, setOrders, addOrder }}>
      {children}
    </orderContext.Provider>
  );
};

export default OrderProvider;
