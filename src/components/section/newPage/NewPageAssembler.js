import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../../../store/items-actions';

import ProductsMap from '../../main-page/ProductsMap';
import Section from '../Section';
import ContentWrapper from '../generalUtilities/content/ContentWrapper';
import FilterLayout from '../generalUtilities/filter/FilterLayout';
import FilterName from '../generalUtilities/filter/FilterName';

const NewPageAssembler = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <Section>
      <FilterLayout>
        <FilterName title='categories' isOpen={true}></FilterName>
        <FilterName title='sub-category' isOpen={false}></FilterName>
      </FilterLayout>
      <ContentWrapper title='New'>
        <ProductsMap data={products} />
      </ContentWrapper>
    </Section>
  );
};

export default NewPageAssembler;
