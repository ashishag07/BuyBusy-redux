// external modules

// internal modules
import styles from "./ProductList.module.css";

// custom component
import ProductCard from "../ProductCard/ProductCard";

// custom context
import { useProductValue } from "../context/productContext";

//-----------------------------------------------------
function ProductList() {
  const { products } = useProductValue();
  return (
    <div className={styles.productGrid}>
      <div className={styles.grid}>
        {products.map((prod) => (
          <ProductCard product={prod} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
