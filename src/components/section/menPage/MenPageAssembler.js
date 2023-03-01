import { useSelector } from 'react-redux';

import ContentWrapper from '../generalUtilities/content/ContentWrapper';
import FilterLayout from '../generalUtilities/filter/FilterLayout';
import FilterName from '../generalUtilities/filter/FilterName';
import Section from '../Section';
import ProductsMap from '../../main-page/ProductsMap';

const MenPageAssembler = () => {
  const products = useSelector((state) => state.items.data).filter(
    (product) => product.sexOrGroup === 'm'
  );

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
