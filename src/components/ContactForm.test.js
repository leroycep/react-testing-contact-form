import React from "react";
import { render } from "@testing-library/react";
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

test("simple data, no error messages", () => {
  const { getByLabelText, fireEvent } = render(<ContactForm />);

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

  //firstName.;

  expect(firstName).toBeInTheDocument();
  expect(lastName).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(message).toBeInTheDocument();
});
