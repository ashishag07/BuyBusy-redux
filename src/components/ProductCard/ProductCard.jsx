// internal modules
import styles from "./ProductCard.module.css";

// external modules
import { Link } from "react-router-dom";

// custom context
import { useAuth } from "../context/authContext";
import { useCartValue } from "../context/cartContext";

//--------------------------------------------------------
function ProductCard({ product }) {
  const { addToCart } = useCartValue();
  const { activeUser } = useAuth();

  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img
          src={product?.url}
          alt="img"
          width="100%"
          className={styles.cardImg}
        />
      </div>
      <div className={styles.cardDetails}>
        <p>{product?.name}</p>
        <h3>&#x20b9; {product.price}</h3>
      </div>
      {activeUser ? (
        <div className={styles.cardBtn} onClick={() => addToCart(product)}>
          Add To Cart
        </div>
      ) : (
        <div className={styles.cardBtn}>
          <Link to="/login">Add To Cart</Link>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
