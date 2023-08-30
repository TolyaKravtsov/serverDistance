/** @jest-environment jsdom */
import React from "react";

import { fireEvent, render } from "@testing-library/react";

import { Login } from "./Login";
import { useSignIn } from "./useSignIn";

jest.mock("./useSignIn");

test("renders login form and handles submission", () => {
  const authorizationMock = jest.fn();
  const isErrorMock = false;

  // @ts-ignore
  useSignIn.mockReturnValue({
    authorization: authorizationMock,
    isError: isErrorMock,
  });

  const { getByLabelText, getByText } = render(<Login />);

  const usernameInput = getByLabelText("Username");
  const passwordInput = getByLabelText("Password");
  const submitButton = getByText("Login");

  fireEvent.change(usernameInput, { target: { value: "testuser" } });
  fireEvent.change(passwordInput, { target: { value: "testpassword" } });
  fireEvent.click(submitButton);

  expect(authorizationMock).toHaveBeenCalledWith({
    username: "testuser",
    password: "testpassword",
  });
});
