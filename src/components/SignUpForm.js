import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import Input from "../components/Input";

export default function SignUpForm() {
  return (
    <div className="card bg-light text-dark">
      <h2 className="card-header text-center fs-1">Start Your Journey</h2>
      <Form data-testid="signup-form" className="card-body">
        <Input
          id="firstName"
          label="First Name"
          placeholder="Please enter your first name"
        />
        <Input
          id="lastName"
          label="Last Name"
          placeholder="Please enter your last name"
        />
        <Input
          id="email"
          label="Email"
          placeholder="email@.example.com"
          type="email"
        />
        <Input
          id="phone"
          label="Phone Number"
          placeholder="123-456-7890"
          type="tel"
        />
        <Input
          id="trip-option"
          label="Trip Option"
          placeholder="Which trip option are you interested in?"
        />
        
        <Button className="btn btn-primary btn-lg my-4">Sign Up</Button>
      </Form>
    </div>
  );
}
