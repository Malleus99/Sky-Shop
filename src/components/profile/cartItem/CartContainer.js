import { useSelector } from 'react-redux';
import CartItem from './CartItem';

import classes from './CartContainer.module.css';
const CartContainer = () => {
  const cart = useSelector((state) => state.cart.items);
  const totalCartPrice = cart
    .reduce((acc, item) => {
      return acc + item.totalPrice;
    }, 0)
    .toFixed(2);

  const carts = cart.map((item) => (
    <CartItem
      id={item.id}
      title={item.name}
      price={item.price}
      quantity={item.quantity}
      totalPrice={item.totalPrice}
    />
  ));

  return (
    <section className={classes.cartContainer}>
      {carts}
      <div className={classes.order}>
        <div key={totalCartPrice} className={classes.totalPrice}>
          <span>Order total: </span>
          <span>₾{totalCartPrice}</span>
        </div>
        <div className={classes.orderBtn}>ORDER</div>
      </div>
    </section>
  );
};

export default CartContainer;
