import { Box, Button, Container, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { currency } from "../../utils/currency";
import ItemCount from "../ItemList/ItemCount";
import { CartContext } from "../../Context/CartContext/CartContext";
import DeleteIcon from '@mui/icons-material/Delete';

const CartItem = ({ product }) => {
  const { increase, decrease, removeItem } = useContext(CartContext);
  const [count, setCount] = useState(product.quantity);

  const onAdd = () => {
    increase(product.id);
    setCount(product.quantity);
  };

  const onSub = () => {
    decrease(product.id);
    setCount(product.quantity);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
      <img
        src={product.images[0]}
        alt={product.name}
        width={"auto"}
        height={"200px"}
      />
      <Box>
        <Typography sx={{mt: "0.5rem", mb:"3rem", fontWeight:"700"}}>{product.name}</Typography>
        <Container sx={{display:"flex", flexDirection:"row", alignItems:"center"}}>
          <ItemCount quantity={product.quantity} onAdd={onAdd} onSub={onSub}/>
          <Button variant="outlined" size="large" startIcon={<DeleteIcon />} sx={{ ml: "0.5rem"}}>
            Remove
          </Button>
        </Container>
      </Box>
      <Typography sx={{mt: "0.5rem", fontWeight:"700"}}>{currency(product.price)}</Typography>
    </Box>
  );
};

export default CartItem;
