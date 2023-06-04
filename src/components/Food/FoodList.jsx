import React from 'react';
import { FoodConteyner } from './FoodList.styled';
import { useDispatch } from 'react-redux';
import { addItem } from 'redux/cardSlice';
import { nanoid } from 'nanoid';
const listProduct = [
  { name: 'burger', price: 10, id: nanoid(2), amount: 1 },
  { name: 'pizza', price: 5, id: nanoid(2), amount: 1 },
  {
    name: 'chizburger',
    price: 2,
    id: nanoid(2),
    amount: 1,
  },
];

export function FoodList() {
  const dispatch = useDispatch();

  return (
    <FoodConteyner>
      <ul>
        {listProduct.map(product => (
          <li key={product.id}>
            {product.name}{' '}
            <button
              onClick={() => {
                dispatch(addItem(product));
              }}
              type="button"
            >
              Add to Cart{' '}
            </button>
          </li>
        ))}
      </ul>
    </FoodConteyner>
  );
}
