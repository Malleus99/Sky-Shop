import NavHeader from './navigation/NavHeader';
import TopHeader from './top-side/TopHeader';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <TopHeader />
      <NavHeader />
    </header>
  );
};

export default Header;
