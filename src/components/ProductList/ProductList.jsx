// internal modules
import styles from "./ProductList.module.css";

// custom component
import ProductCard from "../ProductCard/ProductCard";

// redux
import { useSelector } from "react-redux";
import { productSelector } from "../../redux/reducers/productReducer";

//-----------------------------------------------------
function ProductList() {
  const products = useSelector(productSelector);

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
