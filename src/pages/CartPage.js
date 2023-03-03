import ContentWrapper from 'components/section/generalUtilities/content/ContentWrapper';

import CartContainer from 'components/profile/cartItem/CartContainer';

const CartPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ContentWrapper title='Cart'>
        <CartContainer />
      </ContentWrapper>
    </div>
  );
};

export default CartPage;
