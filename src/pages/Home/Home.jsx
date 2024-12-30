// external modules
import { useEffect } from "react";

// dummy data
import dummyData from "../../dummyData";

// custom components
import Hero from "../../components/Hero/Hero";

// redux
import { useDispatch } from "react-redux";
import { productActions } from "../../redux/reducers/productReducer";

//************************************************************ */
// Home page starts
function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productActions.loadProducts(dummyData));
  }, [dispatch]);

  return <Hero />;
}

export default Home;
