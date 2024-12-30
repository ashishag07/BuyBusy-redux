// internal modules
import styles from "./Hero.module.css";

// dummy data
import products from "../../dummyData";

// custom component
import Filter from "../Filter/Filter";
import ProductList from "../ProductList/ProductList";

// redux
import { useDispatch } from "react-redux";
import { productActions } from "../../redux/reducers/productReducer";

//******************************************* */
function Hero() {
  const dispatch = useDispatch();

  const searchInputItem = (e) => {
    dispatch(
      productActions.loadProducts(
        products.filter((prod) =>
          prod.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
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
