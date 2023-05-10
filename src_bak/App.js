import Button from "./components/button/button";
import useProductsFetch from "./components/prduct-card/useProductsFetch";
import { ProductList } from "./components/product-list/product-list";

function App() {
  const data = useProductsFetch(
    "https://flag-2023.proxy.beeceptor.com/products"
  );

  return (
    <>
      <ProductList/>
    </>
  );
}

export default App;
