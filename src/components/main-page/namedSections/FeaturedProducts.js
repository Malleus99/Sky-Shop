import { useSelector } from 'react-redux';

import SectionsLayout from './SectionsLayout';

const FeaturedProducts = () => {
  const products = useSelector((state) => state.items.data).filter(
    (product) => product.productTag === 'featured'
  );

  return (
    <SectionsLayout
      name='featured products'
      items={products}
      visibleItemsCount={6}
    />
  );
};
export default FeaturedProducts;
