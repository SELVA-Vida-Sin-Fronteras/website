import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";

export default function SignUpForm() {
  return (
    <div className="card bg-light text-dark">
      <h2 className="card-header text-center fs-1">Start Your Journey</h2>
      <Form data-testid="signup-form" className="card-body">
        <Form.Field>
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input id="firstName" className="form-control"></input>
        </Form.Field>
        <Form.Field>
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input id="lastName" className="form-control"></input>
        </Form.Field>
        <Form.Field>
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input id="email" className="form-control" type="email"></input>
        </Form.Field>
        <Form.Field>
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <input id="phone" className="form-control" type="tel"></input>
        </Form.Field>
        <Form.Field>
          <label htmlFor="trip-option" className="form-label">
            Trip Option
          </label>
          <input id="trip-option" className="form-control"></input>
        </Form.Field>
        <button className="btn btn-primary btn-lg my-4">Sign Up</button>
      </Form>
    </div>
  );
}
