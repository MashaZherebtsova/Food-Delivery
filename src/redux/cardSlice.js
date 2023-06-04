import { createSlice } from '@reduxjs/toolkit';

export const cardSlice = createSlice({
  // Имя слайса
  name: 'card',
  // Начальное состояние редюсера слайса
  initialState: { items: [], totalPrice: 0 },

  // Объект редюсеров
  reducers: {
    addItem(state, action) {
      const isExist = state.items.find(
        item => item.name === action.payload.name
      );
      state.totalPrice = state.totalPrice + action.payload.price;
      if (isExist) {
        state.items = state.items.map(item => {
          if (item.name === action.payload.name) {
            return {
              ...item,
              amount: item.amount + 1,
              totalPrice: (item.totalPrice += item.price),
            };
          }
          return item;
        });

        return;
      }
      state.items.push({ ...action.payload, totalPrice: action.payload.price });
    },
    decrementItem(state, action) {
      const isExist = state.items.find(item => item.id === action.payload);
      state.totalPrice = state.totalPrice - isExist.price;
      if (isExist.amount < 2) {
        state.items = state.items.filter(item => item.id !== action.payload);
      } else {
        state.items = state.items.map(item => {
          if (item.id === action.payload) {
            return {
              ...item,
              amount: item.amount - 1,
              totalPrice: (item.totalPrice -= item.price),
            };
          }
          return item;
        });
      }
    },
    incrementItem(state, action) {
      state.items = state.items.map(item => {
        if (item.id === action.payload) {
          state.totalPrice = state.totalPrice + item.price;
          return {
            ...item,
            amount: item.amount + 1,
            price: (item.price += item.price),
          };
        }
        return item;
      });
    },
  },
});

// Генераторы экшенов
export const { addItem, decrementItem, incrementItem, deleteItem } =
  cardSlice.actions;
// Редюсер слайса
export const cardReducer = cardSlice.reducer;
