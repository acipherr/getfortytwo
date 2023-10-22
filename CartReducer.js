import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(item => item.id == action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({...action.payload, quantity: 1});
      }
    },

    removeItemFromCart: (state, action) => {
      const removedItem = state.cart.filter(
        item => item.id !== action.payload.id,
      );
      state.cart = removedItem;
    },
    incrementQuantity: (state, action) => {
      const itemInCart = state.cart.find(item => item.id == action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      }
    },
    decreaseQuantity: (state, action) => {
      const itemInCart = state.cart.find(item => item.id == action.payload.id);
      if (itemInCart.quantity == 1) {
        const removedItem = state.cart.filter(
          item => item.id !== action.payload.id,
        );
        state.cart = removedItem;
      } else {
        itemInCart.quantity--;
      }
    },
  },
});

export const {
  addToCart,
  removeItemFromCart,
  incrementQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
