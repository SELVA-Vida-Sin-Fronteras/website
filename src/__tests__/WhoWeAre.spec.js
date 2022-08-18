import { screen, render } from "@testing-library/react";
import WhoWeAre from "../pages/WhoWeAre"

describe("Who We Are", () => {
    describe("Layout", () => {
      it("has header", () => {
        render(<WhoWeAre />);
        const header = screen.queryByRole("heading", { name: "Who We Are" });
        expect(header).toBeInTheDocument();
      });
    });
  });