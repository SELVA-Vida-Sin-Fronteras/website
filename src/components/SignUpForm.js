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
      </Form>
    </div>
  );
}
