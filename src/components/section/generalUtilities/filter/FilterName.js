import { useState } from 'react';
import classes from './FilterName.module.css';

// Requires props: title, isOpen
// e.g <FilterName title='price-range' isOpen={false}/>
// isOpen prop determines if a filter will be displayed on first render of the page

const FilterName = (props) => {
  const [openFilter, setOpenFilter] = useState(props.isOpen);

  const titleStyle = props.title.charAt(0).toUpperCase() + props.title.slice(1);

  const filterShowHandler = () => {
    setOpenFilter(!openFilter);
  };

  return (
    <div className={classes.container} onClick={filterShowHandler}>
      <div className={classes.filterName}>
        <h4 className={classes.name}>{titleStyle}</h4>
        <span className={classes.symbol}>{openFilter ? '▲' : '▼'}</span>
      </div>
      {openFilter && props.children}
    </div>
  );
};

export default FilterName;
