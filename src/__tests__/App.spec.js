import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("routing and navigation", () => {
  const setup = (path) => {
    window.history.pushState({}, "", path);
    render(<App />);
  };
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
  it.each`
    path             | pageTestId
    ${"/"}           | ${"home-page"}
    ${"/WhoWeAre"}   | ${"who-we-are"}
    ${"/Enrichment"} | ${"enrichment"}
    ${"/Blog"}       | ${"blog"}
    ${"/TakeAction"} | ${"take-action"}
    ${"/NoSuchPage"} | ${"error"}
  `("diplays $pageTestId when path is $path", async ({ path, pageTestId }) => {
    setup(path);
    const page = await screen.findByTestId(pageTestId);
    expect(page).toBeInTheDocument();
  });
});
