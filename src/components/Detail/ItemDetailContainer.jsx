import { useState } from "react";
import Spinner from "../Spinner/Spinner";
import { Alert, Box, Container, Stack } from "@mui/material";
import ItemDetail from "./ItemDetail";
import { array_products } from "../../utils/products";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});

  return (
    <Box>
      {loading ? (
        <Spinner />
      ) : !product ? (
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity="error">This is an error alert — check it out!</Alert>
        </Stack>
      ) : (
        <Container maxWidth="xl" sx={{
          px:"1rem",
          mx:"auto",
          my:"1rem",
        }}>
          <Breadcrumb category1="Children" category2="T-Shirt" />
          <ItemDetail item={array_products[1]} />
        </Container>
      )}
    </Box>
  );
};

export default ItemDetailContainer;
