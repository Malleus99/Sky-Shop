import { useSelector } from 'react-redux';

import ContentWrapper from '../generalUtilities/content/ContentWrapper';
import FilterLayout from '../generalUtilities/filter/FilterLayout';
import FilterName from '../generalUtilities/filter/FilterName';
import Section from '../Section';
import ProductsMap from '../../main-page/ProductsMap';

const DiscountPageAssembler = () => {
  const products = useSelector((state) => state.items.data).filter(
    (product) => product.discount > 0
  );

  return (
    <Section>
      <FilterLayout>
        <FilterName title='Categories'></FilterName>
        <FilterName title='Sub-category'></FilterName>
      </FilterLayout>
      <ContentWrapper title='Discount'>
        <ProductsMap data={products} />
      </ContentWrapper>
    </Section>
  );
};

export default DiscountPageAssembler;
