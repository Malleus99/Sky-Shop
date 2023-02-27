import { useState } from 'react';

import classes from './ProductImgs.module.css';
const ProductsImgs = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  const imgCount = props.imgs.length;

  const onMouseOverHandler = () => {
    if (!isHovering && imgCount > 1) setIsHovering(true);
  };
  const onMouseOutHandler = () => {
    if (isHovering && imgCount > 1) {
      setIsHovering(false);
    }
  };
  const firstImgClass =
    isHovering && imgCount > 1 ? classes.imgDisable : classes.imgActive;
  const secondImgClass =
    !isHovering && imgCount > 1 ? classes.imgDisable : classes.imgActive;

  return (
    <div
      className={classes.imgContainer}
      onMouseOver={onMouseOverHandler}
      onMouseOut={onMouseOutHandler}
    >
      <img
        src={props.imgs[0]}
        alt={props.productName}
        className={firstImgClass}
      ></img>
      {imgCount > 1 && (
        <img
          src={props.imgs[1]}
          alt={props.productName}
          className={secondImgClass}
        ></img>
      )}
    </div>
  );
};

export default ProductsImgs;
