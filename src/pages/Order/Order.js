// internal modules
import styles from "./Order.module.css";

// custom context
import { useOrderVal } from "../../components/context/orderContext";

//--------------------------------------------------------
function Order() {
  const { orders } = useOrderVal();

  if (orders.length === 0) {
    return (
      <div>
        <h1>No Orders Yet !!</h1>
      </div>
    );
  }
  return (
    <div className={styles.ordersContainer}>
      <h1>Your Orders</h1>

      <div className={styles.orderListContainer}>
        {orders.map((order) => (
          <div className={styles.orderCard}>
            <h6>OrderId: {order.id}</h6>
            <h3>Ordered On: {order.createdOn}</h3>
            <div className={styles.orderItemsTable}>
              <div className={styles.headRow}>
                <div className={styles.colName}>Product Name</div>
                <div className={styles.col}>QTY</div>
                <div className={styles.col}>Price</div>
                <div className={styles.col}>Amount</div>
              </div>

              {order.purchasedItems.map((item) => (
                <div className={styles.row}>
                  <div className={styles.colName}>
                    <p>{item.name}</p>
                  </div>
                  <div className={styles.col}>{item.qty}</div>
                  <div className={styles.col}>{item.price}</div>
                  <div className={styles.col}>{item.qty * item.price}</div>
                </div>
              ))}

              <hr />
              <div className={styles.orderAmount}>
                Total Amount:{" "}
                {order.purchasedItems.reduce(
                  (acc, item) => acc + item.qty * item.price,
                  0
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Order;
