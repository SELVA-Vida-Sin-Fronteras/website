const TakeAction = () => {
  return (
    <div data-testid="take-action" className="page p-5">
      <h1 className="text-center">Take Action</h1>
      <section className="card p-4 mx-auto my-5" style={{ maxWidth: '40rem'}}>
        <h2>Donate</h2>
        
        <p>
          Become a monthly sustainer. Your donation goes directly to support the
          work of the Amazon Reserve for Peace .
        </p>
        <a className="btn btn-primary btn-lg my-4" href="https://secure.squarespace.com/checkout/donate?donatePageId=5fc82b9ff97c193540e54e8a&ss_cvr=1ee9f121-670a-44f6-9577-19d3ec9a6f8e%7C1647975355020%7C1656005177842%7C1656507308687%7C17&ss_cvt=1656507308687&websiteId=5f80a2fbd5a7fe3c49230053">
          Donate
        </a>
        <p>Our U.S. tax ID number is: 83-0767820</p>
      </section>
    </div>
  );
};

export default TakeAction;
