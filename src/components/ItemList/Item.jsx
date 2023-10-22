import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const Item = ({ product }) => {
  return (
    <Card sx={{ width: 345, m: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="345"
          image={product.images[0]}
          alt={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Item;
