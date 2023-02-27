import classes from './ProductSizes.module.css';

const ProductSizes = (props) => {
  const sizes = props.sizes.map((size, index) => {
    if (size.amount > 0) {
      return (
        <span key={index} className={classes.normal}>
          {size.size}
        </span>
      );
    } else {
      return (
        <span key={index} className={`${classes.nosupply} ${classes.normal}`}>
          {size.size}
        </span>
      );
    }
  });

  return sizes;
};
export default ProductSizes;
