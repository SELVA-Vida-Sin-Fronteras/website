import { screen, render } from "@testing-library/react";
import Enrichment from "../pages/Enrichment";

describe("Who We Are", () => {
  describe("Layout", () => {
    it("has header", () => {
      render(<Enrichment />);
      const header = screen.queryByRole("heading", {
        name: "Enrichment Journeys",
      });
      expect(header).toBeInTheDocument();
    });
  });
});
