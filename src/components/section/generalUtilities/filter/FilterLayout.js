import classes from './FilterLayout.module.css';
const FilterLayout = (props) => {
  return (
    <div className={classes.container}>
      <h3 className={classes.filterpara}>Filter by</h3>
      {props.children}
    </div>
  );
};

export default FilterLayout;
