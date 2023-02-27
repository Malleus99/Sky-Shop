import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../../../store/items-actions';

import FilterLayout from '../generalUtilities/filter/FilterLayout';
import FilterName from '../generalUtilities/filter/FilterName';
import Section from '../Section';
import ContentWrapper from '../generalUtilities/content/ContentWrapper';
import ProductsMap from '../../main-page/ProductsMap';
import database_URL from '../../../Helpers/databaseURL';

const WomenPageAssembler = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.items).filter(
    (product) => product.sexOrGroup === 'f'
  );

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

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
