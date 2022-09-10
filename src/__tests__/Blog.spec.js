import { render, screen } from "@testing-library/react";
import Blog from "../pages/Blog";

describe("Blog Page", () => {
  describe("Layout", () => {
    it.each`
      name                  | testId
      ${"Featured Article"} | ${"featured-article"}
      ${"articles"}         | ${"articles"}
      ${"archives"}         | ${"archives"}
    `("has $name", ({ testId }) => {
      render(<Blog />);
      expect(screen.getByTestId(testId)).toBeInTheDocument();
    });
  });
});
