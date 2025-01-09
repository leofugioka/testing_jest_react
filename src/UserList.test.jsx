import { render, screen } from "@testing-library/react";
import UserList from "./UserList";

test("render one row per user", () => {
  // render component
  const users = [
    { name: "joão", email: "joao@joao.com" },
    { name: "laura", email: "laura@laura.com" },
  ];
  render(<UserList />);

  // find all the rows in the table

  // Assertion: correct number of rows in the table, 1 for each user
});
