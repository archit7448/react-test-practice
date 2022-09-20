import { useState } from "react";

const OTP = ({ onSubmit }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setShow(true);
          const { username } = event.target.elements;
          onSubmit({ username: username.value });
        }}
      >
        <label htmlFor="username">username</label>
        <input id="username" type="text" />
        <button type="submit">Submit</button>
      </form>
      {show && (
        <form>
          <label htmlFor="otp">otp</label>
          <input id="otp" type="number" />
        </form>
      )}
    </>
  );
};

export { OTP };
