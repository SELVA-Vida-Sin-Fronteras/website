import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Enrichment from "../pages/Enrichment";

const setup = () => {
  render(<Enrichment />);
};

beforeEach(() => setup());

describe("Enrichment Journey Page", () => {
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
  it("should have a first name input field", () => {
    const input = screen.getByLabelText("First Name");
  });
  it("should have a last name input field", () => {
    const input = screen.getByLabelText("Last Name");
  });
  it("should have an email input field", () => {
    const input = screen.getByLabelText("E-mail");
  });
  it("should have a trip option input field", () => {
    const input = screen.getByLabelText("Trip Option");
  });
  it("should have a sign up button", () => {
    const button = screen.queryByRole("button", { name: "Sign Up" });
  });
  it("should disable the button initially", () => {
    const button = screen.queryByRole("button", { name: "Sign Up" });
    expect(button).toBeDisabled();
  });
});
