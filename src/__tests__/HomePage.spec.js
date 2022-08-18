import { screen, render } from "@testing-library/react";
import HomePage from '../pages/HomePage'

describe("Home Page", () => {
  describe("Layout", () => {
    it("has header", () => {
      render(<HomePage/>)
      const header = screen.queryByRole("heading", { name: "Our Mission" });
      expect(header).toBeInTheDocument();
    });
  });
});
