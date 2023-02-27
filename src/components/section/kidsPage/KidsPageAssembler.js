import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../../../store/items-actions';

import ContentWrapper from '../generalUtilities/content/ContentWrapper';
import FilterLayout from '../generalUtilities/filter/FilterLayout';
import FilterName from '../generalUtilities/filter/FilterName';
import Section from '../Section';
import ProductsMap from '../../main-page/ProductsMap';

const KidsPageAssembler = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.items).filter(
    (product) => product.sexOrGroup === 'kids'
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
      <ContentWrapper title='Kids'>
        <ProductsMap data={products} />
      </ContentWrapper>
    </Section>
  );
};

export default KidsPageAssembler;
