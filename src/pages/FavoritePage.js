import { useSelector } from 'react-redux';

import ProductsMap from 'components/main-page/ProductsMap';
import ContentWrapper from 'components/section/generalUtilities/content/ContentWrapper';

const FavoritePage = () => {
  const products = useSelector((state) => state.items.data);

  const favorites = useSelector((state) => state.favorites.items);

  const favoriteItems = products.filter((product) =>
    favorites.some((fav) => fav.id === product.id)
  );

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ContentWrapper title='Favorites'>
        <ProductsMap data={favoriteItems} />
      </ContentWrapper>
    </div>
  );
};

export default FavoritePage;
