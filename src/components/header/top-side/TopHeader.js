import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import LogoMain from 'supplementary/Logo-main.png';
import ProfileSvg from 'supplementary/Svg/ProfileSvg';
import FavoriteSvg from 'supplementary/Svg/FavoriteSvg';
import ShoppingCartSvg from 'supplementary/Svg/ShoppingCartSvg';
import SearchForm from './SearchForm';
import classes from './TopHeader.module.css';
import { logout } from 'store/auth-slice';

// :FIXME: Create better Logout element
const TopHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const favoritesCount = useSelector((state) => state.favorites.items.length);
  const cartItemsCount = useSelector((state) => state.cart.items.length);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  function NavigateToMainPageHandler() {
    navigate('/');
  }

  const logoutHandler = () => {
    dispatch(logout());
    navigate('/', { replace: true });
  };

  return (
    <div className={classes.container}>
      <div onClick={NavigateToMainPageHandler}>
        <img src={LogoMain} alt='logo' />
      </div>
      <SearchForm />
      <div className={classes.interactiveContainer}>
        {!isLoggedIn && (
          <Link to='/auth'>
            <ProfileSvg />
          </Link>
        )}
        {isLoggedIn && (
          <div onClick={logoutHandler} className={classes.logOut}>
            LOGOUT
          </div>
        )}

        {isLoggedIn && (
          <div className={classes.interactiveBtns}>
            <Link to='/favorites'>
              <FavoriteSvg className={classes.svgs} />
              <p className={classes.favoritesCount}>{favoritesCount}</p>
            </Link>
          </div>
        )}
        {isLoggedIn && (
          <div className={classes.interactiveBtns}>
            <Link to='cart'>
              <ShoppingCartSvg className={classes.svgs} />
              <p className={classes.cartCount}>{cartItemsCount}</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopHeader;
