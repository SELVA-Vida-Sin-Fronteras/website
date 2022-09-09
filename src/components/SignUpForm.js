const SignUpForm = () => {
  function handleSubmit(evt) {
    evt.preventDefault();
  }
  return (
    <form
      data-testid="signup-form"
      className="card bg-light text-dark"
      onSubmit={handleSubmit}
    >
      <h2 className="card-header text-center fs-1">Start Your Journey</h2>
      <div className="card-body">
        <label htmlFor="firstName" className="form-label">
          First Name
        </label>
        <input id="firstName" type="text" className="form-control" />
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input id="lastName" type="text" className="form-control" />
        <label htmlFor="email" className="form-label">
          E-mail
        </label>
        <input id="email" type="text" className="form-control" />
        <label htmlFor="phoneNumber" className="form-label">
          Phone
        </label>
        <input id="phoneNumber" type="number" className="form-control" />
        <p>(Optional)</p>
        <label htmlFor="tripOption" className="form-label">
          Trip Option
        </label>
        <input id="tripOption" type="text" className="form-control" />
        <button className="btn btn-primary btn-lg my-4">Sign Up</button>
      </div>
    </form>
  );
};

export default SignUpForm;
