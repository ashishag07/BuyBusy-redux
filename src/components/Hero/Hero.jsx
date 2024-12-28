// external modules

// internal modules
import styles from "./Hero.module.css";

// dummy data
import products from "../../dummyData";

// custom component
import Filter from "../Filter/Filter";
import ProductList from "../ProductList/ProductList";

//custom context
import { useProductValue } from "../context/productContext";

//******************************************* */
function Hero() {
  const { setProducts } = useProductValue();

  const searchInputItem = (e) => {
    setProducts(
      products.filter((prod) =>
        prod.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div className={styles.heroContainer}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Search By Name"
          className={styles.heroInput}
          onChange={searchInputItem}
        />
      </div>

      <div className={styles.heroFlexWrap}>
        <Filter />
        <ProductList />
      </div>
    </div>
  );
}

export default Hero;
