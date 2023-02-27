import classes from './Section.module.css';

const Section = (props) => {
  return <div className={classes.flexcontainer}>{props.children}</div>;
};

export default Section;
