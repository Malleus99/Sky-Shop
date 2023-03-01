import classes from './FilterLayout.module.css';
const FilterLayout = ({ children }) => {
  return (
    <div className={classes.container}>
      <h3 className={classes.filterpara}>Filter by</h3>
      {children}
    </div>
  );
};

export default FilterLayout;
