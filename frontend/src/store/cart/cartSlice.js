import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  total_price: 0,
  total_quantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const exist = state.products.find(
        (product) =>
          product.id_product === action.payload.id_product &&
          product?.color.id === action.payload?.color.id
      );

      if (!exist) {
        state.products.push(action.payload);
      } else {
        exist.quantity += action.payload.quantity;
      }

      state.total_price = state.products.reduce(
        (accum, curr) => accum + curr.quantity * curr.price,
        0
      );

      state.total_quantity = state.products.reduce(
        (accum, curr) => accum + curr.quantity,
        0
      );
    },

    changeQuantity: (state, action) => {
      const exist = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (exist) {
        exist.quantity = action.payload.quantity;
      } else {
        throw new Error();
      }

      state.total_price = state.products.reduce(
        (accum, curr) => accum + curr.quantity * curr.price,
        0
      );

      state.total_quantity = state.products.reduce(
        (accum, curr) => accum + curr.quantity,
        0
      );
    },

    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );

      state.total_price = state.products.reduce(
        (accum, curr) => accum + curr.quantity * curr.price,
        0
      );

      state.total_quantity = state.products.reduce(
        (accum, curr) => accum + curr.quantity,
        0
      );
    },
  },
});

export const { addToCart, changeQuantity, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
