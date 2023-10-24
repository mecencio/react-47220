import ItemListContainer from "./components/ItemList/ItemListContainer";
import Navbar from "./components/header/Navbar";
import ItemDetailContainer from "./components/Detail/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { array_products } from "./utils/products";
import CartProvider from "./Context/CartContext/CartContext";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <CartProvider>
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
          <Route
            exact
            path="/category/:categoryId"
            element={<ItemListContainer array_products={array_products} />}
          />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
