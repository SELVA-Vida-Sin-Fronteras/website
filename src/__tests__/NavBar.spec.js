import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";


describe("NavBar", () => {
  const setup = (path) => {
    window.history.pushState({}, "", path);
    render(<App />);
  };
  describe("The navigation bar contains the correct links", () => {
    it.each`
      targetPage
      ${"Home"}
      ${"Who We Are"}
      ${"Enrichment Journey"}
      ${"Blog"}
      ${"Take Action"}
    `("has link to $targetPage on Navbar", ({ targetPage }) => {
      setup("/");
      const link = screen.getByRole("link", { name: targetPage });
      expect(link).toBeInTheDocument();
    });
  });
  describe("when the user clicks a navigation link the correct page is displayed", () => {
    it.each`
      initialPath    | clickingTo              | visiblePage
      ${"/whoweare"} | ${"Home"}               | ${"home-page"}
      ${"/"}         | ${"Who We Are"}         | ${"who-we-are"}
      ${"/"}         | ${"Enrichment Journey"} | ${"enrichment"}
      ${"/"}         | ${"Blog"}               | ${"blog"}
      ${"/"}         | ${"Take Action"}        | ${"take-action"}
    `(
      "displays $visiblePage page after clicking $clickingTo link",
      ({ initialPath, clickingTo, visiblePage }) => {
        setup(initialPath);
        const link = screen.getByRole("link", { name: clickingTo });
        userEvent.click(link);
        expect(screen.getByTestId(visiblePage)).toBeInTheDocument();
      }
    );
  });
  describe("The brand functions as a link to home page", () => {
    it("displays the home page when clicking the brand logo", async () => {
      setup("/whoweare");
      const logo = await screen.findByTestId("logo");
      userEvent.click(logo);
      expect(screen.getByTestId("home-page")).toBeInTheDocument();
    });
  });
});
