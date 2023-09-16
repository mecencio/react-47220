import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";

const ItemListContainer = () => {
  return (
    <Box sx={{flexGrow: 1, display: "flex", justifyContent: "center"}}>
        {/* First Card */}
      <Card sx={{ maxWidth: 345, m: 2 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image="/images/product-01.webp"
            alt="product 1"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                CAMISETA DE CALENTAMIENTO ARGENTINA 3 ESTRELLAS
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Afa Preshi 3S es un nuevo producto para Hombre de adidas. Te invitamos a ver las imágenes para apreciar más detalles desde diferentes ángulos.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
        {/* Second Card */}
      <Card sx={{ maxWidth: 345, m: 2 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image="/images/product-02.webp"
            alt="product 2"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                CAMISETA ALTERNATIVA SELECCIÓN ARGENTINA FEMENINA 23 PARA NIÑOS
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Reflejando los variados paisajes y vistas majestuosas del país, los colores en esta camiseta alternativa adidas para jóvenes se encargan de que siempre te destaqués al momento de apoyar a tu selección.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
        {/* Third Card */}
      <Card sx={{ maxWidth: 345, m: 2 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image="/images/product-03.webp"
            alt="product 3"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                BUZO ARGENTINA ESSENTIALS
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Afa Og Es Cr Y es un nuevo producto para Niños de adidas.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default ItemListContainer;
