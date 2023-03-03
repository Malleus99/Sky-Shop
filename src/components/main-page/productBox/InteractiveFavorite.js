import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from 'store/favorites-slice';

import classes from './InteractiveFavorite.module.css';
import FavoriteSvg from 'supplementary/Svg/FavoriteSvg';
import FavoritedSvg from 'supplementary/Svg/FavoritedSvg';

const InteractiveFavorite = ({ itemId }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const isFavorited = favorites.some((favorite) => favorite.id === itemId);

  const toggleFavoriteHandler = () => {
    if (isLoggedIn) {
      dispatch(toggleFavorite({ id: itemId }));
    } else {
      alert('Please log in');
    }
  };

  return (
    <div onClick={toggleFavoriteHandler} className={classes.favContainer}>
      {isFavorited ? (
        <FavoritedSvg className={classes.removeFavorite} />
      ) : (
        <FavoriteSvg className={classes.addFavorite} />
      )}
    </div>
  );
};

export default InteractiveFavorite;
