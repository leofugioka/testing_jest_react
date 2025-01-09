import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

test("can receive a new user and show it on a list", async () => {
  // render app
  render(<App />);

  // get name and email input | get button
  const button = screen.getByRole("button", { name: /add user/i });
  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });

  // user inputs name
  await user.click(nameInput);
  await user.keyboard("felipe");
  await user.click(emailInput);
  await user.keyboard("felipe@felipe.com");

  await user.click(button);

  // verify data in table
  const felipeRow = screen.getByRole("row", { name: /felipe felipe@felipe.com/i });

  // Assertion
  expect(felipeRow).toBeInTheDocument();
});
