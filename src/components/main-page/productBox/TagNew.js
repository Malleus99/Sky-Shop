import { Fragment } from 'react';
import classes from './TagNew.module.css';

// :FIXME: not a final version
const TagNew = ({ tags }) => {
  const newTag = tags?.map((str) => str.toLowerCase()).includes('new');

  return (
    <Fragment>
      {newTag && (
        <div className={classes.newContainer}>
          <span className={classes.span}>New</span>
        </div>
      )}
    </Fragment>
  );
};

export default TagNew;
