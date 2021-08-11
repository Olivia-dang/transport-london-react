import { render, screen } from "@testing-library/react";
import Home from "./Home";
import React from "react";
import { StaticRouter as Router } from "react-router-dom";

test("renders Home", () => {
  render(
    <Router>
      <Home />
    </Router>
  );
  const linkElement = screen.getByText(/greenhouse/i);
  expect(linkElement).toBeInTheDocument();
});
