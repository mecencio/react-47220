import ItemListContainer from "./components/ItemList/ItemListContainer";
import Navbar from "./components/header/NavBar";
import Box from "@mui/material/Box";
import { array_products } from "./utils/products";

function App() {
  
  return (
    <>
      <Navbar pageName="ECOM"/>
      <ItemListContainer array_products={array_products} />
    </>
  );
}

export default App;
