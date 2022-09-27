import { Form } from "semantic-ui-react";

export default function Input(props) {
  const { id, label, placeholder, type, isValid } = props;

  let classList = "form-control"
  if (!isValid) {
    classList += " is-invalid"
  }

  return (
    <Form.Field>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input id={id} className={classList} placeholder={placeholder} type={type || "text"}/>
    </Form.Field>
  );
}
