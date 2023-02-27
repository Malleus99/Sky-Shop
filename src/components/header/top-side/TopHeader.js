import { useNavigate } from 'react-router-dom';

import LogoMain from '../../../supplementary/Logo-main.png';
import ProfileSvg from '../../../supplementary/Svg/ProfileSvg';
import FavoriteSvg from '../../../supplementary/Svg/FavoriteSvg';
import ShoppingCartSvg from '../../../supplementary/Svg/ShoppingCartSvg';
import classes from './TopHeader.module.css';

const TopHeader = () => {
  const navigate = useNavigate();

  function NavigateToMainPageHandler() {
    navigate('/');
  }

  return (
    <div className={classes.container}>
      <div onClick={NavigateToMainPageHandler}>
        <img src={LogoMain} alt='logo' />
      </div>
      <form className={classes.form}>
        <input type='search' placeholder='Search Shop' />
        <button type='button' />
      </form>
      <div className={classes.svgs}>
        <ProfileSvg />
        <FavoriteSvg />
        <ShoppingCartSvg />
      </div>
    </div>
  );
};

export default TopHeader;
