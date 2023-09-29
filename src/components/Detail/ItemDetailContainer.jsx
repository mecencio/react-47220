import Spinner from "../Spinner/Spinner";
import { Alert, Box } from "@mui/material";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});

  return (
    <Box>
      {loading ? (
        <Spinner />
      ) : !product ? (
        <Box>
          <Alert severity="error">This is an error alert — check it out!</Alert>
        </Box>
      ) : (
        <Box></Box>
      )}
    </Box>
  );
};

export default ItemDetailContainer;
