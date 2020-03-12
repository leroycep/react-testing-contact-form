import React from "react";
import { render, act, fireEvent, waitForElement } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("first name, last name, email, and message exist on the form", () => {
  const { getByText, getByLabelText } = render(<ContactForm />);

  const firstName = getByLabelText(/first name/i);
  const lastName = getByLabelText(/last name/i);
  const email = getByLabelText(/email/i);
  const message = getByLabelText(/message/i);

  expect(firstName).toBeInTheDocument();
  expect(lastName).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(message).toBeInTheDocument();
});

test("simple data, no error messages", async () => {
  const { getByLabelText, getByText, queryByText } = render(<ContactForm />);

  const data = {
    firstName: "billy",
    lastName: "joel",
    email: "billy.joel@gmail.com",
    message: "We didn't start the fire"
  };

  const firstName = getByLabelText(/first name/i);
  const lastName = getByLabelText(/last name/i);
  const email = getByLabelText(/email/i);
  const message = getByLabelText(/message/i);

  fireEvent.change(firstName, { target: data.firstName });
  fireEvent.change(lastName, { target: data.lastName });
  fireEvent.change(email, { target: data.email });
  fireEvent.change(message, { target: data.message });


  const output = await waitForElement(() => getByText(data.firstName));

  expect(queryByText(/error/i)).toBeNull();
  expect(output).toBeInTheDocument();
});
