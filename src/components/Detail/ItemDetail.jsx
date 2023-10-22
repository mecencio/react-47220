import { Alert, Box, Button, Card, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { currency } from "../../utils/currency";
import ItemCount from "../ItemList/ItemCount";
import Toaster from "../Toaster/Toaster";
import { LocalShippingOutlined } from "@mui/icons-material";
import { CartContext } from "../../Context/CartContext/CartContext";

const ItemDetail = ({ item }) => {
  const [count, setCount] = useState(1);
  const [open, setOpen] = useState(false);
  const { addToCart } = useContext(CartContext);

  const onSub = () => count > 1 && setCount(count - 1);
  const onAdd = () => count < item.stock && setCount(count + 1);

  const addItem = () => {
    item.quantity = count;
    addToCart(structuredClone(item)) && handleOpen();
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Card
      sx={{
        my: "1.5rem",
        p: "1rem",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box sx={{ mr: "1rem" }}>
          <img
            src={item.images[0]}
            alt={item.name}
            width={"500px"}
            height={"auto"}
          />
        </Box>
        <Box
          sx={{
            px: "1.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "600" }}>
            {item.name}
          </Typography>
          <Typography sx={{ px: "0.375rem" }}>{item.description}</Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              fontWeight: "600",
              mt: "2rem",
              fontSize: "20px",
            }}
          >
            Price: {currency(item.price)}
          </Typography>
          { item.stock > 0 ?
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <ItemCount
              quantity={count}
              onAdd={onAdd}
              onSub={onSub}
              stock={item.stock}
            />
            <Button
              variant="contained"
              sx={{ ml: "0.375rem" }}
              onClick={addItem}
            >
              Add to Cart
            </Button>
          </Box>
          : <Alert severity="error">No stock</Alert>
          }
          { item.price > 4999 &&
          <Box sx={{ display: "flex", justifyContent:"center"}}>
            <LocalShippingOutlined sx={{ mr:"0.5rem"}} />
            <Typography>Free delivery</Typography>
          </Box>
          }
          <Toaster
            open={open}
            handleClose={handleClose}
            handleOpen={handleOpen}
            message={"succesfully added"}
          />
        </Box>
      </Box>
    </Card>
  );
};

export default ItemDetail;
