import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
  cartList: [],
  totalAmount: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addItem: (state, action) => {
      const item = state.cartList.find((el) => {
        return action.payload.id === el.id;
      });
      if (item) {
        item.amount += action.payload.amount;
      } else {
        state.cartList.push(action.payload);
      }
      state.totalAmount++;
    },
    removeItem: (state, action) => {
      const item = state.cartList.find((el) => {
        return action.payload.id === el.id;
      });
      if (item) {
        if (item.amount === 1) {
          state.cartList = state.cartList.filter(
            (el) => el.id !== action.payload.id
          );
        } else {
          item.amount--;
        }
        state.totalAmount--;
      }
    },
    clearItem: (state) => {
      state.cartList = [];
      return;
    },
  },
});

export const cartActions = CartSlice.actions;

export default CartSlice;
