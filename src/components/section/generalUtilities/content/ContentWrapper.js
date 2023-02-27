import classes from './ContentWrapper.module.css';
const ContentWrapper = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>
        <h1 className={classes.titlespace}>
          <span className={classes.name}>{props.title}</span>
          <div className={classes.line}></div>
        </h1>
      </div>
      <div className={classes.flexbox}>{props.children}</div>
    </div>
  );
};
export default ContentWrapper;
