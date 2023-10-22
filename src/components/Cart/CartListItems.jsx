import { Box, Card, Divider } from "@mui/material";
import React from "react";
import CartItem from "./CartItem";

const CartListItems = ({ products }) => {
  return (
    <Card
      sx={{
        my: "1.5rem",
        mx: "2.5rem",
        p: "1rem",
      }}
    >
        {products.map(item => {
            return (
              <div>
                <CartItem key={item.id} product={item} />
                <Divider sx={{my:"1rem"}} />
              </div>
            )
        })}
    </Card>
  );
};

export default CartListItems;
