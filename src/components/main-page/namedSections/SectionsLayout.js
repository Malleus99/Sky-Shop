import React, { useState } from 'react';
import classes from './SectionsLayout.module.css';
import { Fragment } from 'react';

import ProductsMap from '../ProductsMap';

// Pass visibleItemsCount prop to signify maximum how many box should be displayed simultaniously.
const SectionsLayout = ({ name, items, visibleItemsCount }) => {
  /* SLIDER LOGIC */
  const [sliderTilt, setSliderTilt] = useState(0);

  const oneSlideMaxAmount = visibleItemsCount;
  const oneSlideShift = 100 / oneSlideMaxAmount;

  const totalElementsCount = items.length;
  const maxVisibleSlide = totalElementsCount - oneSlideMaxAmount;

  const sliderEffect = {
    transform: `translate3d(-${sliderTilt * oneSlideShift}%, 0px, 0px)`,
  };

  const prevSlideHandler = (e) => {
    if (sliderTilt - oneSlideMaxAmount <= 0) {
      return setSliderTilt(0);
    }
    if (sliderTilt - oneSlideMaxAmount > 0) {
      return setSliderTilt(sliderTilt - oneSlideMaxAmount);
    }
  };
  const nextSlideHandler = (e) => {
    if (sliderTilt + oneSlideMaxAmount > maxVisibleSlide) {
      return setSliderTilt(maxVisibleSlide);
    }
    if (sliderTilt + oneSlideMaxAmount <= maxVisibleSlide) {
      return setSliderTilt(sliderTilt + oneSlideMaxAmount);
    }
  };

  const prevButtonClasses = `${classes.previous} ${
    sliderTilt === 0 && classes.disabled
  }`;
  const nextButtonClassed = `${classes.next} ${
    sliderTilt === maxVisibleSlide && classes.disabled
  }`;

  /* TITLE TRANSFORMATION*/
  const sectionNameCapitalized = name
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <Fragment>
      <div className={classes.category}>
        <p>{sectionNameCapitalized}</p>
      </div>
      <div className={classes.container}>
        <div className={classes.slider} style={sliderEffect}>
          <ProductsMap data={items} />
        </div>
        {totalElementsCount > oneSlideMaxAmount && (
          <div className={prevButtonClasses} onClick={prevSlideHandler}>
            &lt;
          </div>
        )}
        {totalElementsCount > oneSlideMaxAmount && (
          <div className={nextButtonClassed} onClick={nextSlideHandler}>
            &gt;
          </div>
        )}
      </div>
    </Fragment>
  );
};
export default SectionsLayout;
