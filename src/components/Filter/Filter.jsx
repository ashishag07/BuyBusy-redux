// external modules
import { useEffect, useState } from "react";
import Slider from "react-input-slider";

// internal modules
import styles from "./Filter.module.css";

// dummy data
import products from "../../dummyData";

// custom contex
import { useProductValue } from "../context/productContext";

//************************************************************* */
function Filter() {
  const [price, setPrice] = useState({ x: 12000 });
  const [selectedCategory, setSelectedCategory] = useState([]);
  const { setProducts } = useProductValue();

  const handleSelectCategory = (e) => {
    // check if it is already selected
    const isExist = selectedCategory.findIndex((cat) => cat === e.target.value);
    if (isExist === -1) {
      setSelectedCategory((prev) => [...prev, e.target.value]);
    } else {
      const newList = selectedCategory.filter((cat) => cat !== e.target.value);
      setSelectedCategory(newList);
    }
  };

  useEffect(() => {
    let filteredProducts;
    if (selectedCategory.length === 0) {
      return setProducts(products);
    } else {
      filteredProducts = products.filter((prod) =>
        selectedCategory.includes(prod.category)
      );
      return setProducts(filteredProducts);
    }
  }, [selectedCategory, setProducts]);

  useEffect(() => {
    const filteredProducts = products.filter((prod) => prod.price <= price.x);
    setProducts(filteredProducts);
  }, [price, setProducts]);

  return (
    <div className={styles.heroSidebar}>
      <div className={styles.filter}>
        <h3 className={styles.heading}>Filter</h3>
        <div>
          <div>{"price: " + price.x}</div>
          <Slider
            styles={{
              track: {
                backgroundColor: "transparent",
                border: "1px solid salmon",
              },
              active: {
                backgroundColor: "salmon",
              },
              thumb: {
                width: 20,
                height: 20,
              },
            }}
            axis="x"
            x={price.x}
            xstep={0.1}
            xmin={0}
            xmax={4000}
            onChange={({ x }) => setPrice({ x: parseFloat(x.toFixed(2)) })}
          />
        </div>
        <h4 className={styles.heading}>Category</h4>
        <div>
          <div className={styles.label}>
            <input
              type="checkbox"
              id="cat1"
              name="cat1"
              value="Men's Cloathing"
              onChange={handleSelectCategory}
            />
            <label for="cat1">Men's Cloathing</label>
          </div>
          <div className={styles.label}>
            <input
              type="checkbox"
              id="cat2"
              name="cat1"
              value="Women's Cloathing"
              onChange={handleSelectCategory}
            />
            <label for="cat2"> Women's Cloathing</label>
          </div>
          <div className={styles.label}>
            <input
              type="checkbox"
              id="cat3"
              name="cat1"
              value="Jwelery"
              onChange={handleSelectCategory}
            />
            <label for="cat3"> Jwelery</label>
          </div>
          <div className={styles.label}>
            <input
              type="checkbox"
              id="cat4"
              name="cat1"
              value="Electronics"
              onChange={handleSelectCategory}
            />
            <label for="cat4"> Electronics</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
