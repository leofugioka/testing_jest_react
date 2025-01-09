import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it shows 2 inputs and a button", () => {
  // render the component
  render(<UserForm />);

  // Manipulate the component or find an element in it
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // Assertion - make sure the component is doing
  // what we expect it to do

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("it calls onUserAdd when the form is submitted", async () => {
  // NOT THE BEST IMPLEMENTATION:
  // const argList = [];
  // const callback = (...args) => {
  //   argList.push(args);
  // };

  // BETTER IMPLEMENTATION, making use of jest's Mock functions
  const mock = jest.fn();

  // Try to render my component
  render(<UserForm onUserAdd={mock} />);

  // Find the two inputs

  // an OK implementation
  // const [nameInput, emailInput] = screen.getAllByRole("textbox");

  // BETTER implementation:
  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });

  // Simulate typing in a name
  await user.click(nameInput);
  await user.keyboard("joão");

  // Simulate typing an email
  await user.click(emailInput);
  await user.keyboard("joao@joao.com");

  // Find the button
  const button = screen.getByRole("button");

  // Simulate clicking on the submit button
  await user.click(button);

  // Assertion to check if onUserAdd is called
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({ name: "joão", email: "joao@joao.com" });
});
