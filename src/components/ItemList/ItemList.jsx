import { Box } from "@mui/material";
import Item from "./Item";

const ItemList = (props) => {

  return (
    <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
        {
            props.products.map( product => 
                <Item product={product} key={product.id} />
            )
        }
    </Box>
  );
};

export default ItemList;
