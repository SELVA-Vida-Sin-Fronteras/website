import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Enrichment from "../pages/Enrichment";

const setup = () => {
  render(<Enrichment />);
};

beforeEach(() => setup());

describe("Enrichment Journey Page", () => {
  describe("Layout", () => {
    it("should have a header", () => {
      const header = screen.queryByRole("heading", {
        name: "Ecuador Enrichment Journey",
      });
      expect(header).toBeInTheDocument();
    });
    it("should have an itinerary", () => {
      const itinerary = screen.getByTestId("itinerary");
      expect(itinerary).toBeInTheDocument();
    });
    it("should have a sign up form", () => {
      const form = screen.getByTestId("signup-form");
    });
  });
});
