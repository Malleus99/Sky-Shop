import { useSelector } from 'react-redux';
import { useState } from 'react';
import MagnifyingGlassSvg from '../../../supplementary/Svg/MagnifyingGlassSvg';
import classes from './SearchForm.module.css';
const SearchForm = () => {
  const [inputValue, setInputValue] = useState('');

  const products = useSelector((state) => state.items.data).filter((product) =>
    product.productName.includes(`${inputValue}`)
  );
  const items = products.map((item) => <div>{item.productName}</div>);

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form className={classes.form}>
      <div className={classes.formContainer}>
        <input
          className={classes.input}
          type='search'
          placeholder='Search Shop'
          value={inputValue}
          onChange={inputChangeHandler}
        />
        <button className={classes.searchButton} type='button'>
          <MagnifyingGlassSvg className={classes.svgIcon} />
        </button>
      </div>
      {inputValue && <div className={classes.searchBox}>{items}</div>}
    </form>
  );
};

export default SearchForm;
