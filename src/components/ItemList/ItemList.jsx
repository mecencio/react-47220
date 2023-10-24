import { Box, Grid } from "@mui/material";
import Item from "./Item";
import { NavLink } from "react-router-dom";

const ItemList = (props) => {

  return (
    <Grid container spacing={2} sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
        {
            props.products.map( product => 
                <NavLink to={`/product/${product.id}`} key={product.id} style={{ textDecoration: "none" }}>
                  <Grid item xs={12}><Item product={product} /></Grid>
                </NavLink>
            )
        }
    </Grid>
  );
};

export default ItemList;
