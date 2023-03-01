import { useSelector, useDispatch } from 'react-redux';

import FilterLayout from '../generalUtilities/filter/FilterLayout';
import FilterName from '../generalUtilities/filter/FilterName';
import Section from '../Section';
import ContentWrapper from '../generalUtilities/content/ContentWrapper';
import ProductsMap from '../../main-page/ProductsMap';
import { filterItems } from '../../../store/items-slice';
import { useEffect } from 'react';

const WomenPageAssembler = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterItems({ sex: 'f' }));
  }, [dispatch]);

  const products = useSelector((state) => state.items.sectionData);

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
