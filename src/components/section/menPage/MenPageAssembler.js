import ContentWrapper from '../generalUtilities/content/ContentWrapper';
import FilterLayout from '../generalUtilities/filter/FilterLayout';
import FilterName from '../generalUtilities/filter/FilterName';
import Section from '../Section';

import database_URL from '../../../Helpers/databaseURL';
import { useState, useEffect, useCallback } from 'react';
import ProductsMap from '../../main-page/ProductsMap';

const MenPageAssembler = () => {
  const [products, setProducts] = useState([]);

  const fetchItemsHandler = useCallback(async () => {
    try {
      const response = await fetch(database_URL);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      const loadedItems = Object.entries(data).reduce((acc, [id, item]) => {
        if (item.sexOrGroup === 'm') {
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
        <FilterName title='categories' isOpen={true}></FilterName>
        <FilterName title='sub-category' isOpen={false}></FilterName>
      </FilterLayout>
      <ContentWrapper title='Men'>
        <ProductsMap data={products} />
      </ContentWrapper>
    </Section>
  );
};

export default MenPageAssembler;
