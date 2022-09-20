import { cleanup, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { DataProvider } from "../../context/dataContext";
import { CartCard } from "./cartCard";

afterEach(cleanup);
describe("Card Cart", () => {
  test("render product", () => {
    const { getAllByTestId } = render(<CartCard />, {
      wrapper: DataProvider,
    });

    const productNames = getAllByTestId(/product-name/i).map(
      (div) => div.textContent
    );

    expect(productNames).toMatchSnapshot();
  });

  test("test for button click", () => {
    const cartHandler = jest.fn();
    const { getAllByText } = render(<CartCard onClick={cartHandler} />, {
      wrapper: DataProvider,
    });

    act(() => getAllByText(/add to cart/i).forEach((value) => value.click()));
    expect(cartHandler).toBeCalledTimes(getAllByText(/add to cart/i).length);
  });
});
