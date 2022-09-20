export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const cartItem = state.products.find(
        (product) => product.id === action.payload.id
      );
      return { ...state, cart: [...state.cart, { ...cartItem, quantity: 1 }] };
  }
};



