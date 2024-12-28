// internal modules
import styles from "./Cart.module.css";

// external modules
import { Link } from "react-router-dom";

// custom context
import { useCartValue } from "../../components/context/cartContext";
import { useOrderVal } from "../../components/context/orderContext";

//-------------------------------------------------------------
function Cart() {
  const { cartItems, clearCart, removeItem, removeSingleItem, addToCart } =
    useCartValue();

  const { addOrder } = useOrderVal();

  // conditional rendering
  if (cartItems.length === 0) {
    return (
      <div className={styles.cartEmptyContainer}>
        <h1>Cart Is Empty !!</h1>

        <Link to="/">
          <div className={styles.btnShopping}>Continue Shopping</div>
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.cartContainer}>
      <div className={styles.listContainer}>
        {cartItems.map((item) => (
          <div className={styles.itemCard}>
            <div className={styles.imgContainer}>
              <img src={item.url} alt="img" width="100" />
            </div>

            <div className={styles.rightContainer}>
              <div className={styles.detailsContainer}>
                <p>{item.name}</p>
                <h3>&#x20b9; {item.price} </h3>
              </div>

              <div className={styles.qtyControls}>
                <div
                  className={styles.qtyBtn}
                  onClick={() => removeSingleItem(item)}
                >
                  -
                </div>
                <h2>{item.qty}</h2>
                <div className={styles.qtyBtn} onClick={() => addToCart(item)}>
                  +
                </div>
              </div>

              <div
                className={styles.removeBtn}
                onClick={() => removeItem(item)}
              >
                Remove Item
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.orderContainer}>
        <h1 className={styles.summaryTitle}>Summary</h1>
        <div className={styles.summaryContent}>
          <p>Total Items: </p>
          <p>{cartItems.reduce((accu, item) => accu + item.qty, 0)}</p>
        </div>
        <div className={styles.summaryContent}>
          <p>Total Amount: </p>
          <p>
            {cartItems.reduce((accu, item) => accu + item.qty * item.price, 0)}
          </p>
        </div>
        <div className={styles.summaryContent}>
          <p>Discount: </p>
          <p>-</p>
        </div>
        <div className={styles.summaryContent}>
          <p>Delievery Charges: </p>
          <p>Free</p>
        </div>
        <hr className={styles.hr} />
        <div className={styles.summaryContent}>
          <p>Billing Amount: </p>
          <p>
            {cartItems.reduce((accu, item) => accu + item.qty * item.price, 0)}
          </p>
        </div>
        <div className={styles.btnContainer}>
          <div className={styles.btn} onClick={clearCart}>
            Clear Cart
          </div>
          <div className={styles.btn} onClick={() => addOrder(cartItems)}>
            Purchase
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
