import { Button, ButtonGroup } from "@mui/material";
import { useState } from "react";

const ItemCount = (props) => {
  const [ quantity, setQuantity ] = useState(1);

  const onAdd = () => {
    quantity < props.stock && setQuantity(quantity+1);
  };

  const onSub = () => {
    quantity > 0 && setQuantity(quantity-1);
  };

  return (
    <ButtonGroup size="small" aria-label="small button group">
      <Button onClick={onSub}>-</Button>
      <Button>{quantity}</Button>
      <Button onClick={onAdd}>+</Button>
    </ButtonGroup>
  );
};

export default ItemCount;
