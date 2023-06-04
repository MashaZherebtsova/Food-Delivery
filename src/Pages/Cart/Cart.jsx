import { CartList } from 'components/CartList/CartList';
import { ShopingCart } from 'components/ShopingCart';
import { useSelector } from 'react-redux';
import { selectTotalPrice } from 'redux/selectors';
import { ReactComponent as EmptyCart } from 'img/emptyCart.svg';
export function Cart() {
  const price = useSelector(selectTotalPrice);
  return (
    <div>
      <ShopingCart />
      <p>Total Prise:{price}</p>
      {price > 0 ? <CartList /> : <EmptyCart />}
    </div>
  );
}
