import classes from './ProductBox.module.css';
import ProductsImgs from './ProductImgs';
import ProductPrice from './ProductPrice';
import ProductSizes from './ProductSizes';
import TagDiscount from './TagDiscount';
import TagNew from './TagNew';

const ProductBox = ({
  id,
  previewPics,
  manufacturer,
  productName,
  type,
  sexOrGroup,
  sizes,
  price,
  discount,
  productTag,
  tags,
}) => {
  const productType = type.charAt(0).toUpperCase() + type.slice(1);
  const productFullName = productName.toUpperCase();
  const productManufacturer = manufacturer.toUpperCase();

  return (
    <div key={id} id={id} className={classes.product}>
      <div className={classes.tags}>
        <TagDiscount price={price} discount={discount} />
        <TagNew tags={tags} />
      </div>
      <div className={classes.imgContainer}>
        <ProductsImgs imgs={previewPics} />
      </div>
      <div className={classes.info}>
        <div className={classes.infobox}>
          <p className={classes.grayout}>{productType}</p>
          <p className={classes.description}>{productFullName}</p>
          <p className={classes.grayout}>{productManufacturer}</p>
        </div>
        <ProductPrice price={price} discount={discount} />
      </div>
      <div className={classes.sizesContainer}>
        <ProductSizes sizes={sizes} />
      </div>
    </div>
  );
};

export default ProductBox;
