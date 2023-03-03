import { useDispatch } from 'react-redux';

import classes from './InteractiveCart.module.css';
import ShoppingCartSvg from 'supplementary/Svg/ShoppingCartSvg';
import { addItemToCart } from 'store/cart-slice';

const InteractiveCart = ({ id, title, price, discount }) => {
  const dispatch = useDispatch();
  const newPrice = price * (1 - discount / 100);

  const addItemHandler = () => {
    dispatch(addItemToCart({ id, title, price: newPrice }));
  };

  return (
    <div className={classes.cartContainer} onClick={addItemHandler}>
      <ShoppingCartSvg className={classes.cart} />
    </div>
  );
};

export default InteractiveCart;
