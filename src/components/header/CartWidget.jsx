import Badge from '@mui/material/Badge';
import Cart from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
  return (
    <Badge badgeContent={99} color='error'>
      <Cart/>
    </Badge>
  )
}

export default CartWidget;