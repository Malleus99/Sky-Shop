import { useDispatch } from 'react-redux';

import { addItemToCart, removeItemFromCart } from 'store/cart-slice';
import classes from './CartItem.module.css';

const CartItem = ({ id, title, price, quantity, totalPrice }) => {
  const dispatch = useDispatch();

  const totalPriceTwoDecimals = totalPrice.toFixed(2);
  const titleTransformed = title.toUpperCase();

  const increaseItemCountHandler = () => {
    if (quantity < 9) {
      dispatch(addItemToCart({ id, title, price }));
    } else {
      alert('Maximum amount exceeded.');
    }
  };

  const reduceItemCounthandler = () => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <div key={id} id={id} className={classes.item}>
      <div className={classes.titleContainer}>
        <p>{titleTransformed}</p>
      </div>
      <div className={classes.container}>
        <div className={classes.amountContainer}>
          <span onClick={reduceItemCounthandler}>-</span>
          <p>{quantity}</p>
          <span onClick={increaseItemCountHandler}>+</span>
        </div>
        <p className={classes.totalPrice}>₾{totalPriceTwoDecimals}</p>
      </div>
    </div>
  );
};

export default CartItem;
