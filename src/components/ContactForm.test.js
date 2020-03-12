import React from "react";
import { render } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("first name, last name, email, and message exist on the form", () => {
  const { getByText } = render(<ContactForm />);

  const firstName = getByText(/first name/i);
  const lastName = getByText(/last name/i);
  const email = getByText(/email/i);
  const message = getByText(/message/i);

  expect(firstName).toBeInTheDocument();
  expect(lastName).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(message).toBeInTheDocument();
});
