import { useData } from "../../context/dataContext";

export function CartCard({ onClick }) {
  const { state, dispatch } = useData();
  const { cart } = state;
  return (
    <div>
      {state.products.map(({ productName, price, id }) => {
        return (
          <div key={id}>
            <h1 data-testid="product-name">{productName}</h1>
            <h2>{price}</h2>
            <button
              onClick={() => {
                dispatch({ type: "ADD_TO_CART", payload: { id: id } });
                onClick();
              }}
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}
