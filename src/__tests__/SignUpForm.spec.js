import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignUpForm from "../components/SignUpForm";

describe("Signup Form", () => {
  render(<SignUpForm></SignUpForm>)
  it("should have a first name input", () => {
    const firstName = screen.getByLabelText("First Name");
    expect(firstName).toBeInTheDocument();
  });
});
