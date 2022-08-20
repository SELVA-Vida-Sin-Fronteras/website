import { render, screen } from "@testing-library/react";
import App from "../App";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

describe("App", () => {
  const setup = (path) => {
    window.history.pushState({}, "", path);
    render(<App />);
  };
  describe("routing paths are correct", () => {
    it.each`
      path             | pageTestId
      ${"/"}           | ${"home-page"}
      ${"/WhoWeAre"}   | ${"who-we-are"}
      ${"/Enrichment"} | ${"enrichment"}
      ${"/Blog"}       | ${"blog"}
      ${"/TakeAction"} | ${"take-action"}
      ${"/NoSuchPage"} | ${"error"}
    `(
      "diplays $pageTestId when path is $path",
      async ({ path, pageTestId }) => {
        setup(path);
        const page = await screen.findByTestId(pageTestId);
        expect(page).toBeInTheDocument();
      }
    );
  });
  describe("the components are a11y compliant", () => {
    it.each`
      path   | pageTestId
      ${"/"} | ${"home-page"}
      ${"/"} | ${"nav-bar"}
      ${"/"} | ${"footer"}
      ${"/WhoWeAre"}   | ${"who-we-are"}
      ${"/Enrichment"} | ${"enrichment"}
      ${"/Blog"}       | ${"blog"}
      ${"/TakeAction"} | ${"take-action"}
      ${"/NoSuchPage"} | ${"error"}
    `("$pageTestId is accessible", async ({ path, pageTestId }) => {
      setup(path)
      const page = await screen.findByTestId(pageTestId);
      const results = await axe(page)
      expect(results).toHaveNoViolations()
    });
  });
});
