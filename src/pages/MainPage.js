import { Fragment } from 'react';
import FeaturedProducts from '../components/main-page/namedSections/FeaturedProducts';

const MainPage = () => {
  return (
    <Fragment>
      <FeaturedProducts />
      {/* <ProductsContainer name='hot sales' /> */}
      {/* <ProductsContainer name='new products' /> */}
    </Fragment>
  );
};

export default MainPage;
