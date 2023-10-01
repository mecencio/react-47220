import { Button, ButtonGroup } from "@mui/material";
import { useState } from "react";

const ItemCount = (props) => {

  return (
    <ButtonGroup size="large" aria-label="small button group">
      <Button onClick={props.onSub}>-</Button>
      <Button>{props.quantity}</Button>
      <Button onClick={props.onAdd}>+</Button>
    </ButtonGroup>
  );
};

export default ItemCount;
