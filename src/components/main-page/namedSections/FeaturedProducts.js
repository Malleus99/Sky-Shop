import { useState, useEffect, useCallback } from 'react';
import ProductsMap from '../ProductsMap';

import SectionsLayout from './SectionsLayout';
import database_URL from '../../../Helpers/databaseURL';
// get data from database and sent on data props :TODO:

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchItemsHandler = useCallback(async () => {
    try {
      const response = await fetch(database_URL);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      const loadedItems = Object.entries(data).reduce((acc, [id, item]) => {
        if (item.productTag === 'featured') {
          acc.push({ id, ...item });
        }
        return acc;
      }, []);
      setProducts(loadedItems);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchItemsHandler();
  }, [fetchItemsHandler]);

  return (
    <SectionsLayout name='featured products'>
      <ProductsMap data={products} />
    </SectionsLayout>
  );
};
export default FeaturedProducts;
