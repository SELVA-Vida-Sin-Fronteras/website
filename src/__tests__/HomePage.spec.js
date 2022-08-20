import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";

const setup = () => {
  render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
};

describe("Home Page", () => {
  describe("home page layout", () => {
    it.each`
      name                    | testId
      ${"Mission"}            | ${"mission"}
      ${"Enrichment Journey"} | ${"enrichment"}
      ${"Blog"}               | ${"blog"}
      ${"Take Action"}        | ${"take-action"}
    `("has a $name card", async ({ testId }) => {
      setup();
      const card = await screen.findByTestId(testId);
      expect(card).toBeInTheDocument();
    });
  });
});
