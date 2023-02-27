import classes from './ProductBox.module.css';
import ProductsImgs from './ProductImgs';
import ProductPrice from './ProductPrice';
import ProductSizes from './ProductSizes';
import TagDiscount from './TagDiscount';

const ProductBox = (props) => {
  const productType = props.type.charAt(0).toUpperCase() + props.type.slice(1);
  const productFullName = props.productName.toUpperCase();
  const productManufacturer = props.manufacturer.toUpperCase();

  return (
    <div key={props.id} id={props.id} className={classes.product}>
      <div className={classes.tags}>
        <TagDiscount price={props.price} discount={props.discount} />
      </div>
      <div className={classes.imgContainer}>
        <ProductsImgs imgs={props.previewPics} />
      </div>
      <div className={classes.info}>
        <div className={classes.infobox}>
          <p className={classes.grayout}>{productType}</p>
          <p className={classes.description}>{productFullName}</p>
          <p className={classes.grayout}>{productManufacturer}</p>
        </div>

        <ProductPrice price={props.price} discount={props.discount} />
      </div>
      <div className={classes.sizesContainer}>
        <ProductSizes sizes={props.sizes} />
      </div>
    </div>
  );
};

export default ProductBox;
