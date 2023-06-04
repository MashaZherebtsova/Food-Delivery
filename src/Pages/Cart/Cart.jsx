import { CartList } from 'components/CartList/CartList';
import { ShopingCart } from 'components/ShopingCart';
import { useSelector } from 'react-redux';
import { selectTotalPrice } from 'redux/selectors';
import { ReactComponent as EmptyCart } from 'img/emptyCart.svg';
import { CartContainer } from './Cart.styled';
export function Cart() {
  const price = useSelector(selectTotalPrice);
  return (
    <>
      <CartContainer>
        <ShopingCart />
      </CartContainer>
      <p>Total Prise:{price}</p>
      {price > 0 ? <CartList /> : <EmptyCart />}
    </>
  );
}
