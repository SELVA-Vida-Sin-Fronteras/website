import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignUpForm from "../components/SignUpForm";

let firstNameInput,
  lastNameInput,
  emailInput,
  phoneInput,
  tripOptionInput,
  button;

const setup = () => {
  render(<SignUpForm />);
  firstNameInput = screen.getByLabelText("First Name");
  lastNameInput = screen.getByLabelText("Last Name");
  emailInput = screen.getByLabelText("E-mail");
  phoneInput = screen.getByLabelText("Phone");
  tripOptionInput = screen.getByLabelText("Trip Option");
  button = screen.queryByRole("button", { name: "Sign Up" });
};

beforeEach(() => setup());

describe("Sign Up Form", () => {
  describe("Layout", () => {
    it.each`
      fieldName
      ${"First Name"}
      ${"Last Name"}
      ${"E-mail"}
      ${"Phone"}
      ${"Trip Option"}
    `("should have $fieldName", ({ fieldName }) => {
      expect(screen.getByLabelText(fieldName)).toBeInTheDocument();
    });
    it("should have a sign up button", () => {
      expect(button).toBeInTheDocument();
    });
    describe("User interaction", () => {
      describe("when the user clicks the submit button", () => {
        const onSubmit = jest.fn();
        it("should handle submit", () => {
          userEvent.click(button);
        });
        describe("if an imput field is empty", () => {
          it("should display an error state when the first name field is empty", () => {
            expect(firstNameInput.classList).not.toContain("is-invalid");
            userEvent.click(button);
            expect(firstNameInput.classList).toContain("is-invalid");
          });
        });
      });
    });
  });
});
