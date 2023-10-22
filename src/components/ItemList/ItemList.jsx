import { Box } from "@mui/material";
import Item from "./Item";
import { NavLink } from "react-router-dom";

const ItemList = (props) => {

  return (
    <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
        {
            props.products.map( product => 
                <NavLink to={`/product/${product.id}`} key={product.id} style={{ textDecoration: "none" }}>
                  <Item product={product} />
                </NavLink>
            )
        }
    </Box>
  );
};

export default ItemList;
