import classes from './TagDiscount.module.css';
const TagDiscount = (props) => {
  const { price, discount } = props;

  const discountAmount = (price - price * (1 - discount / 100)).toFixed(2);

  if (discountAmount <= 0) {
    return;
  } else {
    return (
      <div className={classes.discount}>
        <span className={classes.span}>-₾</span>
        {discountAmount}
      </div>
    );
  }
};

export default TagDiscount;
