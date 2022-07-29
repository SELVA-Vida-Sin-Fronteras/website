const TakeAction = () => {
  return (
    <div className="takeAction">
      <h2>Take Action</h2>
      <section className="subscribe">
        <h3>Subscribe</h3>
        <p>Sign up with your email address to receive news and updates</p>
        <input type="email"></input>
        <button>Subscribe</button>
        <small>We respect your privacy</small>
      </section>
      <section className="donate">
        <h2>Donate</h2>
        <p>
          Become a monthly sustainer. Your donation goes directly to support the
          work of the Amazon Reserve for Peace .
        </p>
        <button>Donate</button>
        <small>Our U.S. tax ID number is: 83-0767820</small>
      </section>
    </div>
  );
};

export default TakeAction;
