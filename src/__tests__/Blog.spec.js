import { screen, render } from "@testing-library/react";
import Blog from "../pages/Blog";

describe("Who We Are", () => {
  describe("Layout", () => {
    it("has header", () => {
      render(<Blog />);
      const header = screen.queryByRole("heading", {
        name: "Subscribe to our blog",
      });
      expect(header).toBeInTheDocument();
    });
  });
});