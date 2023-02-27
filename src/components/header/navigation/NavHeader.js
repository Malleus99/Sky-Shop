import { Link } from 'react-router-dom';

import classes from './NavHeader.module.css';

const NavHeader = () => {
  return (
    <div className={classes.container}>
      <div>
        <Link to='/new' className={classes.linkStyle}>
          New
        </Link>
      </div>
      <div>
        <Link to='/women' className={classes.linkStyle}>
          Women
        </Link>
      </div>
      <div>
        <Link to='/men' className={classes.linkStyle}>
          Men
        </Link>
      </div>
      <div>
        <Link to='/kids' className={classes.linkStyle}>
          Kids
        </Link>
      </div>
      <div>
        <Link to='/discount' className={classes.linkStyle}>
          Discount
        </Link>
      </div>
    </div>
  );
};

export default NavHeader;
