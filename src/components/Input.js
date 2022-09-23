import { Form } from "semantic-ui-react";

export default function Input(props) {
  const { id, label, placeholder, type } = props;
  return (
    <Form.Field>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input id={id} className="form-control" placeholder={placeholder} type={type || "text"}/>
    </Form.Field>
  );
}
