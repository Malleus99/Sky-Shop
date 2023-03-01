import { useEffect, useState } from 'react';
import FilterName from '../FilterName';
import RadioInput from '../inputTypes/RadioInput';
import classes from './CategoriesFilter.module.css';

const CategoriesFilter = ({ data, updateState, title, isOpen }) => {
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    if (selectedOption === 'discount') {
      const filter = data.filter((product) => product.discount > 0);
      updateState(filter);
    }
  }, [selectedOption, updateState]);

  const optionChangeHandler = (event) => {
    if (selectedOption !== event.target.value) {
      setSelectedOption(event.target.value);
    }
  };

  return (
    <FilterName title={title} isOpen={isOpen}>
      <ul className={classes.container}>
        <RadioInput
          id='online-exclusive'
          title={title}
          checked={optionChangeHandler}
        />
        <RadioInput
          id='last-items'
          title={title}
          checked={optionChangeHandler}
        />
        <RadioInput id='discount' title={title} checked={optionChangeHandler} />
        <RadioInput id='hot-sale' title={title} checked={optionChangeHandler} />
        <RadioInput
          id='local-brands'
          title={title}
          checked={optionChangeHandler}
        />
      </ul>
    </FilterName>
  );
};

export default CategoriesFilter;
