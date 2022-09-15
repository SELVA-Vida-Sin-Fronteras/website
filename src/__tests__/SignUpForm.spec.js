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
      ${"Comments"}
    `("should have $fieldName", ({ fieldName }) => {
      expect(screen.getByLabelText(fieldName)).toBeInTheDocument();
    });
    it("sould have comments as a text area", () => {
      const comments = screen.getByLabelText("Comments");
      expect(comments.type).toBe("textarea");
    });
    it("should have trip option as select", ()=> {
      const option = screen.getByLabelText("Trip Option")
      expect(option.type).toBe("select-one");
    })
    it("should have a sign up button", () => {
      expect(button).toBeInTheDocument();
    });
    describe("User interaction", () => {
      describe("when the user clicks the submit button", () => {
        const onSubmit = jest.fn();
        it("should handle submit", () => {
          userEvent.click(button);
        });
        describe("if an input field is empty", () => {
          it.each`
            name
            ${"First Name"}
            ${"Last Name"}
            ${"E-mail"}
            ${"Phone"}
            ${"Trip Option"}
          `(
            "should display an error state when the $name field is empty",
            ({ name }) => {
              const input = screen.getByLabelText(name);
              expect(input.classList).not.toContain("is-invalid");
              userEvent.click(button);
              expect(input.classList).toContain("is-invalid");
            }
          );
        });
      });
    });
  });
});
