import { render } from "@testing-library/react";
import React from "react";
import App from "../src/App";
import { BrowserRouter } from "react-router-dom";

test("jest running", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(true).toBe(true);
});
