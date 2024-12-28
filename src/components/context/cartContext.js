import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

export const cartContext = createContext();

export const useCartValue = () => {
  const value = useContext(cartContext);
  return value;
};

const CartProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [items, setItems] = useState(0);

  const clearCart = () => {
    setCartItems([]);
    setItems(0);
  };

  const addToCart = (product) => {
    // check if product already exist
    const existedProductIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );
    if (existedProductIndex !== -1) {
      const newArray = cartItems.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      );
      setCartItems(newArray);
    } else {
      product.qty = 1;
      setCartItems((prev) => [...prev, product]);
    }

    toast.success("Item is added to the Cart");
  };

  const removeSingleItem = (product) => {
    const existedProductIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );
    if (cartItems[existedProductIndex].qty === 1) {
      removeItem(product);
    } else {
      const newArray = cartItems.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty - 1 } : item
      );

      setCartItems(newArray);
      toast.success("One quantity is removed from the cart");
    }
  };

  const removeItem = (product) => {
    const newList = cartItems.filter((item) => item.id !== product.id);
    const totalItems = items - product.qty;
    setItems(totalItems);
    setCartItems(newList);
    toast.success("Item is removed successfully !!");
  };
  return (
    <cartContext.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        items,
        setCartItems,
        addToCart,
        clearCart,
        removeItem,
        removeSingleItem,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
