import Badge from "@mui/material/Badge";
import Cart from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext/CartContext";
import { NavLink } from "react-router-dom";

const CartWidget = () => {
  const { cartSize } = useContext(CartContext);

  return (
    <NavLink to="/cart" style={{ textDecoration: "none", color:"white" }}>
      <Badge badgeContent={cartSize} color="error">
        <Cart />
      </Badge>
    </NavLink>
  );
};

export default CartWidget;
