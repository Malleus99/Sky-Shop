import { useState } from 'react';
import classes from './FilterName.module.css';

// Requires props: title, isOpen
// e.g <FilterName title='price-range' isOpen={false}/>
// isOpen prop determines if a filter will be displayed on first render of the page

const FilterName = ({ isOpen, title, children }) => {
  const [openFilter, setOpenFilter] = useState(isOpen);
  const titleStyle = title.charAt(0).toUpperCase() + title.slice(1);

  const filterShowHandler = () => {
    setOpenFilter(!openFilter);
  };

  return (
    <div className={classes.container}>
      <div className={classes.filterName} onClick={filterShowHandler}>
        <h4 className={classes.name}>{titleStyle}</h4>
        <span className={classes.symbol}>{openFilter ? '▲' : '▼'}</span>
      </div>
      {openFilter && children}
    </div>
  );
};

export default FilterName;
