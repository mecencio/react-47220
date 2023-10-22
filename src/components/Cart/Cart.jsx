import { useContext } from "react";
import { CartContext } from "../../Context/CartContext/CartContext";
import {
  Alert,
  Box,
  Card,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import CartListItems from "./CartListItems";

const Cart = () => {
  const { cart, total, cartSize, getTotal, setTotal } = useContext(CartContext);

  return (
    <Box sx={{flexGrow: 1}}>
      {cartSize === 0 ? (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="error">This is an error alert — check it out!</Alert>
        </Stack>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <CartListItems products={cart} />
          </Grid>
          <Grid item xs={4}>
            <Card
              sx={{
                my: "1.5rem",
                mx: "2.5rem",
                p: "1rem",
              }}
            >
              <Typography>Summary</Typography>
              <Typography>Total</Typography>
              <Typography>{getTotal()}</Typography>
            </Card>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default Cart;
