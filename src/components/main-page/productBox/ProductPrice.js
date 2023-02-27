import classes from './ProductPrice.module.css';
const ProductPrice = (props) => {
  const price = props.price;
  const discount = props.discount;

  if (price - discount < price) {
    const newPrice = price * (1 - discount / 100);

    return (
      <div className={classes.container}>
        <p className={classes.newprice}>
          <span>₾</span>
          {newPrice.toFixed(2)}
        </p>
        <p className={classes.oldprice}>
          <span>₾</span>
          {price.toFixed(2)}
        </p>
      </div>
    );
  } else {
    return (
      <div className={classes.container}>
        <p className={classes.newprice}>
          <span>₾</span>
          {price.toFixed(2)}
        </p>
      </div>
    );
  }
};

export default ProductPrice;
