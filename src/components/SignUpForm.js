import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import Input from "../components/Input";

export default function SignUpForm() {
  const [isValid, setIsValid] = useState(true);

  return (
    <div className="card bg-light text-dark">
      <h2 className="card-header text-center fs-1">Start Your Journey</h2>
      <Form data-testid="signup-form" className="card-body">
        <Input
          id="firstName"
          label="First Name"
          placeholder="Please enter your first name"
          isValid={isValid}
        />
        <Input
          id="lastName"
          label="Last Name"
          placeholder="Please enter your last name"
          isValid={isValid}
        />
        <Input
          id="email"
          label="Email"
          placeholder="email@.example.com"
          type="email"
          isValid={isValid}
        />
        <Input
          id="phone"
          label="Phone Number"
          placeholder="123-456-7890"
          type="tel"
          isValid={isValid}
        />
        <Input
          id="trip-option"
          label="Trip Option"
          placeholder="Which trip option are you interested in?"
          isValid={isValid}
        />

        <Button
          className="btn btn-primary btn-lg my-4"
          onClick={() => setIsValid(false)}
          disabled={!isValid}
        >
          Sign Up
        </Button>
      </Form>
    </div>
  );
}
