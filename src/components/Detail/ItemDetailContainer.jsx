import { useEffect, useState } from "react";
import Spinner from "../components/Spinner/Spinner";
import { Alert, Box, Container, Stack } from "@mui/material";
import ItemDetail from "../components/Detail/ItemDetail";
import { array_products } from "../utils/products";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});

  const { productId } = useParams();

  useEffect(() => {
    setProduct(array_products.filter(prod => prod.id == productId)[0]);
    setLoading(false);
  }, [productId])
  

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
          <ItemDetail item={product} />
        </Container>
      )}
    </Box>
  );
};

export default ItemDetailContainer;
