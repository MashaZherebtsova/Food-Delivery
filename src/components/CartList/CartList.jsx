import { useDispatch, useSelector } from 'react-redux';
import { decrementItem, incrementItem } from 'redux/cardSlice';
import { selectItems } from 'redux/selectors';

export function CartList() {
  const items = useSelector(selectItems);
  const dispatch = useDispatch();

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <p>name: {item.name}</p>
          <p>price: {item.totalPrice}</p>
          <button
            type="button"
            onClick={() => dispatch(decrementItem(item.id))}
          >
            -1
          </button>
          <p>amount: {item.amount}</p>{' '}
          <button
            type="button"
            onClick={() => dispatch(incrementItem(item.id))}
          >
            +1
          </button>
        </li>
      ))}
    </ul>
  );
}
