import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

function createUsers() {
  const users = [
    { name: "joão", email: "joao@joao.com" },
    { name: "laura", email: "laura@laura.com" },
  ];
  return { users };
}

test("render one row per user", () => {
  // render component
  const { users } = createUsers();
  const { container } = render(<UserList users={users} />);

  // find all the rows in the table
  // A work around to avoid header's row:
  const rows = container.querySelectorAll("tbody tr");
  // const rows = within(screen.getByTestId("users")).getAllByRole("row"); // requires to add data-testid into component, may not be ideal depending on your company's directives
  // const rows = screen.getAllByRole("row"); // not ideal because table header's row is also accounted as a row
  // screen.logTestingPlaygroundURL(); useful helper to build testing queries

  // Assertion: correct number of rows in the table, 1 for each user
  expect(rows).toHaveLength(2);
});

test("to have a row for each user", () => {
  const { users } = createUsers();
  // render component
  render(<UserList users={users} />);

  // find rows for each user
  const rowJoao = screen.getByRole("row", { name: /joão joao@joao\.com/i });
  const rowLaura = screen.getByRole("row", { name: /laura laura@laura\.com/i });

  expect(rowJoao).toBeInTheDocument();
  expect(rowLaura).toBeInTheDocument();
});
