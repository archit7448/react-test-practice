import { reducer } from "./reducer";

test("add to cart", () => {
  const intialValue = {
    products: [
      { id: "123", productName: "Milk", price: "50" },
      { id: "124", productName: "Butter", price: "70" },
      { id: "125", productName: "Eggs", price: "60" },
    ],
    cart: [],
  };

  const action = { type: "ADD_TO_CART", payload: { id: "123" } };

  const expectedState = {
    products: [
      { id: "123", productName: "Milk", price: "50" },
      { id: "124", productName: "Butter", price: "70" },
      { id: "125", productName: "Eggs", price: "60" },
    ],
    cart: [{ id: "123", productName: "Milk", price: "50", quantity: 1 }],
  };

  const state = reducer(intialValue, action);

  expect(state).toEqual(expectedState);
});



