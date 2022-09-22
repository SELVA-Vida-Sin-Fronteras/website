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
  it("should have the email type", ()=> {
    const emailField = screen.getByLabelText("Email")
    expect(emailField.type).toBe("email")
  })
  it("should have the type 'tel'",()=>{
    const phoneNumber = screen.getByLabelText("Phone Number")
    expect(phoneNumber.type).toBe("tel")
  })
  it("should have a submit button", () => {
    expect(button).toBeInTheDocument();
  });
});
