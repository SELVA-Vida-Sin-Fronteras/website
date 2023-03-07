import donate from "../assets/img/donate.jpg";
import video from "../assets/mp4/amazon-reserve-for-peace.mp4"

const TakeAction = () => {
  return (
    // TODO: fix divs 
    <div data-testid="take-action" className="page p-5">
      <h1 className="text-center">Take Action</h1>
      <section className="card p-4 mx-auto my-5" style={{ maxWidth: "40rem" }}>
        <h2 className="card-title text-center my-3">Donate</h2>
        <div className="card-body">
          <img
            className="img-fluid mb-3"
            src={donate}
            alt="An elderly man holding a staff"
          />
          <p>
            Become a monthly sustainer. Your donation goes directly to support
            the work of the Amazon Reserve for Peace .
          </p>
          <a
            className="btn btn-primary btn-lg my-4"
            href="https://secure.squarespace.com/checkout/donate?donatePageId=5fc82b9ff97c193540e54e8a&ss_cvr=1ee9f121-670a-44f6-9577-19d3ec9a6f8e%7C1647975355020%7C1656005177842%7C1656507308687%7C17&ss_cvt=1656507308687&websiteId=5f80a2fbd5a7fe3c49230053"
          >
            Donate
          </a>
        </div>
        <p className="card-footer">Our U.S. tax ID number is: 83-0767820</p>
      </section>
      <p>
        In honor and support of Mariana Almeida, Founder of Selva Vida Sin
        Fronteras, The Amazon Reserve for Peace and the Indigenous People of the
        Amazon Rainforest of Ecuador{" "}
      </p>
      <video className="img-fluid" controls >
        <source src={video} type="video/mp4"/>
        
        Your browser does not support the video tag.
      </video>

    </div>
  );
};

export default TakeAction;
