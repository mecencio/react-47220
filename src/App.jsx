import ItemListContainer from "./components/ItemList/ItemListContainer";
import Navbar from "./components/header/NavBar";
import ItemDetailContainer from "./components/Detail/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { array_products } from "./utils/products";

function App() {
  return (
    <BrowserRouter>
      <Navbar pageName="ECOM" />
      <Routes>
        <Route
          exact
          path="/"
          element={<ItemListContainer array_products={array_products} />}
        />
        <Route
          exact
          path="product/:productId"
          element={<ItemDetailContainer />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
