import React, { useState } from 'react';
import classes from './SectionsLayout.module.css';
import { Fragment } from 'react';

// -16.666% moves one slide
const oneSlideMaxAmount = 6;
const oneSlideShift = 100 / oneSlideMaxAmount;

const SectionsLayout = (props) => {
  /* SLIDER LOGIC */
  const [sliderTilt, setSliderTilt] = useState(0);
  const totalElementsCount = props.children.props.data.length;
  const maxVisibleSlide = totalElementsCount - oneSlideMaxAmount;

  const sliderEffect = {
    transform: `translate3d(-${sliderTilt * oneSlideShift}%, 0px, 0px)`,
  };
  const prevSlideHandler = (e) => {
    e.preventDefault();
    if (sliderTilt - oneSlideMaxAmount <= 0) {
      return setSliderTilt(0);
    }
    if (sliderTilt - oneSlideMaxAmount > 0) {
      return setSliderTilt(sliderTilt - oneSlideMaxAmount);
    }
  };

  const nextSlideHandler = (e) => {
    e.preventDefault();
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
  const sectionNameCapitalized = props.name
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
          {props.children}
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
