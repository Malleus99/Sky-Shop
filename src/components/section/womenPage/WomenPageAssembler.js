import { useState, useEffect, useCallback } from 'react';

import FilterLayout from '../generalUtilities/filter/FilterLayout';
import FilterName from '../generalUtilities/filter/FilterName';
import Section from '../Section';
import ContentWrapper from '../generalUtilities/content/ContentWrapper';
import ProductsMap from '../../main-page/ProductsMap';
import database_URL from '../../../Helpers/databaseURL';

const WomenPageAssembler = () => {
  const [products, setProducts] = useState([]);

  const fetchItemsHandler = useCallback(async () => {
    try {
      const response = await fetch(database_URL);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      const loadedItems = Object.entries(data).reduce((acc, [id, item]) => {
        if (item.sexOrGroup === 'f') {
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
    <Section>
      <FilterLayout>
        <FilterName title='Categories'></FilterName>
        <FilterName title='Sub-category'></FilterName>
      </FilterLayout>
      <ContentWrapper title='Women'>
        <ProductsMap data={products} />
      </ContentWrapper>
    </Section>
  );
};

export default WomenPageAssembler;
