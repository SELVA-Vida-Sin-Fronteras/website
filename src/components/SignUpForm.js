import { useState } from "react";
const SignUpForm = () => {
  const [invalid, setInvalid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setInvalid(true);
  };

  let inputClass = "form-control"
  if (invalid) {
    inputClass += " is-invalid"
  }

  return (
    <form
      data-testid="signup-form"
      className="card bg-light text-dark"
      onSubmit={handleSubmit}
    >
      <h2 className="card-header text-center fs-1">Start Your Journey</h2>
      <div className="card-body">
        <label htmlFor="firstName" className="form-label">First Name</label>
        <input id="firstName" label="First Name" className={inputClass} />
        <label htmlFor="lastName" className="form-label">Last Name</label>
        <input id="lastName" label="Last Name"  className={inputClass}  />
        <label htmlFor="email" className="form-label">E-mail</label>
        <input id="email" label="E-mail"  className={inputClass}  />
        <label htmlFor="phone" className="form-label">Phone</label>
        <input id="phone" label="Phone"  className={inputClass}  />
        <label htmlFor="tripOption" className="form-label">
          Trip Option
        </label>
        <select
          id="tripOption"
          className={"form-select " + inputClass}
          
        >
          <option defaultValue>Select your journey</option>
          <option value="1">10 Day / 9Night: $3,442</option>
          <option value="2">Rainforest Only (5 days/4 nights): $1,765</option>
          <option value="3">10 day with Galapagos add on: $5,285</option>
          <option value="3">Rainforest only day with Galapagos add on: $3,608</option>

        </select>
        <label htmlFor="comments" className="form-label">
          Comments
        </label>
        <textarea
          id="comments"
          className="form-control"
          type="textarea"
          style={{ resize: "none", height: "6rem" }}
        />

        <button className="btn btn-primary btn-lg my-4" disabled={invalid}>Sign Up</button>
      </div>
    </form>
  );
};

export default SignUpForm;
