import ProductBox from './productBox/ProductBox';

const ProductsMap = ({ data }) => {
  const products = data.map((product) => {
    return (
      <ProductBox
        key={product.id}
        id={product.id}
        previewPics={product.previewPics}
        manufacturer={product.manufacturer}
        productName={product.productName}
        type={product.type}
        sexOrGroup={product.sexOrGroup}
        sizes={product.sizes}
        price={product.price}
        discount={product.discount}
        productTag={product.productTag}
        tags={product.tags}
      />
    );
  });

  return products;
};

export default ProductsMap;
