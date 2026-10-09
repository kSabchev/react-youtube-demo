import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "./App";

test("renders the home page and search input", () => {
  render(<App />);

  expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
  expect(screen.getByText("BASSHUNTER - DOTA")).toBeInTheDocument();
});
