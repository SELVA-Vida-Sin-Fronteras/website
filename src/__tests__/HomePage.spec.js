import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import App from "../App";

const setup = (path) => {
  window.history.pushState({}, "", path);
  render(<App />);
};

describe("Home Page", () => {
  describe("home page layout", () => {
    it.each`
      name                    | testId
      ${"Mission"}            | ${"home-mission"}
      ${"Enrichment Journey"} | ${"home-enrichment"}
      ${"Blog"}               | ${"home-blog"}
      ${"Take Action"}        | ${"home-take-action"}
    `("has $name card", async ({ testId }) => {
      setup("/");
      const card = await screen.findByTestId(testId);
      expect(card).toBeInTheDocument();
    });
  });
  describe("Interactions", () => {
    describe("when the user clicks a navigation link the correct page is displayed", () => {
      it.each`
        clickingTo              | visiblePage
        ${"How to help"}        | ${"take-action"}
        ${"Start your journey"} | ${"enrichment"}
        ${"Read our blog"}      | ${"blog"}
        ${"How you can help"}   | ${"take-action"}
      `(
        "displays $visiblePage page after clicking $clickingTo link",
        async ({ clickingTo, visiblePage }) => {
          setup("/");
          const link = screen.getByRole("link", { name: clickingTo });
          userEvent.click(link);
          const page = await screen.findByTestId(visiblePage);
          expect(page).toBeInTheDocument();
        }
      );
    });
  });
});
