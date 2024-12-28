import { useContext, createContext, useState } from "react";

export const productContext = createContext();

export const useProductValue = () => {
  const value = useContext(productContext);
  return value;
};

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  return (
    <productContext.Provider value={{ products, setProducts }}>
      {children}
    </productContext.Provider>
  );
};

export default ProductProvider;
