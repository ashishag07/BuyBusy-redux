// external modules
import { useEffect } from "react";

// dummy data
import dummyData from "../../dummyData";

// custom components
import Hero from "../../components/Hero/Hero";

// custom context
import { useProductValue } from "../../components/context/productContext";

//************************************************************ */
// Home page starts
function Home() {
  const { setProducts } = useProductValue();

  useEffect(() => {
    setProducts(dummyData);
  }, [setProducts]);

  return <Hero />;
}

export default Home;
