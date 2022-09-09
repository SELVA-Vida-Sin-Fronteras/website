import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Enrichment from "../pages/Enrichment";

let firstNameInput, lastNameInput, emailInput, phoneInput, tripOptionInput, button;

const setup = () => {
  render(<Enrichment />);
  firstNameInput = screen.getByLabelText("First Name");
  lastNameInput = screen.getByLabelText("Last Name");
  emailInput = screen.getByLabelText("E-mail");
  phoneInput = screen.getByLabelText("Phone");
  tripOptionInput = screen.getByLabelText("Trip Option");
  button = screen.queryByRole("button", { name: "Sign Up" });

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
    it("should have a first name input field", () => {
      expect(firstNameInput).toBeInTheDocument();
    });
    it("should have a last name input field", () => {
      expect(lastNameInput).toBeInTheDocument();
    });
    it("should have an email input field", () => {
      expect(emailInput).toBeInTheDocument();
    });
    it("should have a phone number input field", () => {
      expect(phoneInput).toBeInTheDocument();
    });
    it("should have a trip option input field", () => {
      expect(tripOptionInput).toBeInTheDocument();
    });
    it("should have a sign up button", () => {
      expect(button).toBeInTheDocument()
    });
  });
  describe("User interaction", () => {
    it("should disable the button initially", () => {
      expect(button).toBeDisabled();
    });
    it("it should enable the button when required fields are filled", () => {
      
    });
  });
});
