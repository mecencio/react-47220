import { createContext, useState } from "react";
import { currency } from "../../utils/currency";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  let getItem = (id) => {
    return cart.find((item) => item.id === id);
  };

  let getTotal = () => {
    let result = cart.reduce(function (sum, item) {
      return sum + item.quantity * item.price;
    }, 0);
    return currency(result);
  };

  let addToCart = (product) => {
    if (getItem(product.id) === undefined) {
      setCart([...cart, product]);
      setTotal(getTotal());
    } else {
      return updateQuatity(product);
    }
  };

  let updateQuatity = (product) => {
    const item = getItem(product.id);
    if (item.stock >= item.quantity + product.quantity) {
      removeItem(item.id);
      item.quantity += product.quantity;
      setCart([...cart, item]);
      setTotal(getTotal());
      return true;
    } else return false;
  };

  let removeItem = (id) => {
    const index = cart.findIndex((item) => item.id === id);
    if (index >= 0) {
      cart.splice(index, 1);
      setCart([...cart]);
      return true;
    } else return false;
  };

  let clear = () => {
    setCart([]);
  };

  let increase = (id) => {
    const item = getItem(id);
    if (item.quantity < item.stock) {
      item.quantity++;
      setTotal(getTotal());
    }
  };

  let decrease = (id) => {
    const item = getItem(id);
    item.quantity--;
    if (item.quantity <= 0) {
      removeItem(id);
    }
    setTotal(getTotal());
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        addToCart,
        removeItem,
        cartSize: cart.length,
        increase,
        decrease,
        clear,
        setTotal,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
