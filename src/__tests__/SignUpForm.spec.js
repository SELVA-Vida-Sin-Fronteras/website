import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignUpForm from "../components/SignUpForm";

let button;
const setup = () => {
  render(<SignUpForm />);
  button = screen.queryByRole("button", { name: "Sign Up" });
};

beforeEach(() => setup());

describe("Signup Form", () => {
  describe("Layout", () => {
    it.each`
      name              | inputField
      ${"First Name"}   | ${"first name"}
      ${"Last Name"}    | ${"last name"}
      ${"Email"}        | ${"email"}
      ${"Phone Number"} | ${"phone"}
      ${"Trip Option"}  | ${"trip option"}
    `("should have a $inputField input field", ({ name }) => {
      const inputField = screen.getByLabelText(name);
      expect(inputField).toBeInTheDocument();
    });
    it("should have the email type", () => {
      const emailField = screen.getByLabelText("Email");
      expect(emailField.type).toBe("email");
    });
    it("should have the type 'tel'", () => {
      const phoneNumber = screen.getByLabelText("Phone Number");
      expect(phoneNumber.type).toBe("tel");
    });
    it.each`
      name              | placeholder
      ${"First Name"}   | ${"Please enter your first name"}
      ${"Last Name"}    | ${"Please enter your last name"}
      ${"Email"}        | ${"email@.example.com"}
      ${"Phone Number"} | ${"123-456-7890"}
      ${"Trip Option"}  | ${"Which trip option are you interested in?"}
    `("should have the placeholder $placeholder", ({ name, placeholder }) => {
      const inputField = screen.getByLabelText(name);
      expect(inputField.placeholder).toBe(placeholder);
    });
    it("should have a submit button", () => {
      expect(button).toBeInTheDocument();
    });
  });
  describe("Interactions", () => {
    describe("when the form is submitted with an empty field", () => {
      it.each`
        name             | inputField
        ${"first name"}  | ${"First Name"}
        ${"last name"}   | ${"Last Name"}
        ${"email"}       | ${"Email"}
        ${"phone"}       | ${"Phone Number"}
        ${"trip option"} | ${"Trip Option"}
      `("should display an error state for $name", ({ inputField }) => {
        const input = screen.getByLabelText(inputField);
        expect(input.classList.contains("is-invalid")).toBeFalsy();
        userEvent.click(button);

        expect(input.classList.contains("is-invalid")).toBeTruthy();
      });
    });
  });
});
