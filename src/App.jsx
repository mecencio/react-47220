import ItemListContainer from "./components/ItemList/ItemListContainer";
import Navbar from "./components/header/NavBar";
import Box from "@mui/material/Box";
import { array_products } from "./utils/products";
import ItemDetailContainer from "./components/Detail/ItemDetailContainer";
import Footer from "./components/Footer/Footer";

function App() {
  
  return (
    <>
      <Navbar pageName="ECOM" />
      {/* <ItemListContainer array_products={array_products} /> */}
      <ItemDetailContainer />
      <Footer />
    </>
  );
}

export default App;
