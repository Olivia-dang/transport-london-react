import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import React from "react";
import { StaticRouter as Router } from "react-router-dom";

test("renders footer", () => {
  render(
    <Router>
      <Footer />
    </Router>
  );
  const linkElement = screen.getByText(/olivia dang/i);
  expect(linkElement).toBeInTheDocument();
});
