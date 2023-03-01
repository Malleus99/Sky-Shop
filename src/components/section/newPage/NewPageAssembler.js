import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import ProductsMap from '../../main-page/ProductsMap';
import Section from '../Section';
import ContentWrapper from '../generalUtilities/content/ContentWrapper';
import NewPageFilter from './NewPageFilters';

const NewPageAssembler = () => {
  const products = useSelector((state) => state.items.data);
  const [initState, SetInitData] = useState([]);
  const [visibleData, setVisibleData] = useState([]);

  useEffect(() => {
    setVisibleData(products);
    SetInitData(products);
  }, [products]);

  const updateState = (data) => {
    setVisibleData(data);
  };

  return (
    <Section>
      <NewPageFilter data={initState} updateState={updateState} />
      <ContentWrapper title='New'>
        <ProductsMap data={visibleData} />
      </ContentWrapper>
    </Section>
  );
};

export default NewPageAssembler;
