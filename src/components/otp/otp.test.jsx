import { render, waitFor, screen, act } from "@testing-library/react";
import { OTP } from "./otp";

test("OTP component test", async () => {
  const HandleSubmit = jest.fn();

  const { getByLabelText, getByText } = render(<OTP onSubmit={HandleSubmit} />);

  getByLabelText("username").value = "real dev";

  act(() => getByText(/submit/i).click());

  expect(HandleSubmit).toBeCalledTimes(1);

  expect(HandleSubmit).toBeCalledWith({ username: "real dev" });

  expect(await screen.findByLabelText(/otp/i)).toBeInTheDocument();
});
