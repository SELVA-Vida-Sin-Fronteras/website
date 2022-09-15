import { useState } from "react";
import Input from "./Input";
const SignUpForm = () => {
  
  const [isValid, setIsValid] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsValid(true)
  };
  return (
    <form
      data-testid="signup-form"
      className="card bg-light text-dark"
      onSubmit={handleSubmit}
    >
      <h2 className="card-header text-center fs-1">Start Your Journey</h2>
      <div className="card-body">
        <Input id="firstName" label="First Name" help={isValid}/>
        <Input id="lastName" label="Last Name" />
        <Input id="email" label="E-mail"/>
        <Input id="phone" label="Phone" />
        <Input id="tripOption" label="Trip Option" />
        <button className="btn btn-primary btn-lg my-4">Sign Up</button>
      </div>
    </form>
  );
};

export default SignUpForm;
