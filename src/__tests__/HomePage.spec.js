import HomePage from "../pages/HomePage";
import { screen, render } from "@testing-library/react";

describe("Home Page", () => {
  describe("Layout", () => {
    it("has header", () => {
      render(<HomePage />);
      const header = screen.queryByRole("heading", { name: "Our Mission" });
      expect(header).toBeInTheDocument();
    });
  });
});
