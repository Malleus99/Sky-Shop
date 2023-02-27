import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../../../store/items-actions';

import ProductsMap from '../ProductsMap';
import SectionsLayout from './SectionsLayout';

const FeaturedProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.items).filter(
    (product) => product.productTag === 'featured'
  );

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <SectionsLayout name='featured products'>
      <ProductsMap data={products} />
    </SectionsLayout>
  );
};
export default FeaturedProducts;
