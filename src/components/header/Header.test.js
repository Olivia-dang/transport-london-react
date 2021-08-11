import { render, screen } from "@testing-library/react";
import Header from "./Header";
import React from "react";
import { StaticRouter as Router } from "react-router-dom";

test("renders Header", () => {
  render(
    <Router>
      <Header />
    </Router>
  );
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});
