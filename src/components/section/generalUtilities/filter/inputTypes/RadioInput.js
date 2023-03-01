import classes from './RadioInput.module.css';

// Use kebab-style for id
const RadioInput = ({ id, title, checked }) => {
  const titleStyle = id
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <li className={classes.listItem}>
      <input type='radio' id={id} name={title} value={id} onChange={checked} />
      <label htmlFor={id}>
        <span className={classes.itemName}>{titleStyle}</span>
      </label>
    </li>
  );
};

export default RadioInput;
