import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  describe("routing paths are correct", () => {
    const setup = (path) => {
      window.history.pushState({}, "", path);
      render(<App />);
    };
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
});
