import { useState, useEffect } from "react";
import { Stack, Box } from "@mui/material";
import { asyncMock } from "../../utils/asyncMock";
import Spinner from "../Spinner/Spinner";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    categoryId ? 
    asyncMock(props.array_products).then((result) => {
      setProducts(result.filter(product => product.category === categoryId));
      setLoading(false);
    })
    :
    asyncMock(props.array_products).then((result) => {
      setProducts(result);
      setLoading(false);
    });
  }, [categoryId]);

  return (
    <Stack>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          my: 2,
        }}
      >
        <img
          src="/images/banner-running.webp"
          alt="banner"
          width="100%"
          height="auto"
        />
      </Box>
      {loading ? <Spinner /> : <ItemList products={products} />}
    </Stack>
  );
};

export default ItemListContainer;
