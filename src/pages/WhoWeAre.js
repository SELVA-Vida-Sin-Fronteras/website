const WhoWeAre = () => {
  //FIXME: fix divs 
  return (
    <div data-testid="who-we-are" className="page who-we-are">
      <div className="img-container img-container-hero img-container-hero--who-we-are mb-5"></div>

      <div className="container m-auto p-5" style={{ maxWidth: "50rem" }}>
        <section className="card mb-4 shadow-lg">
          <h1 className="card-header fs-1 fw-bold">Who We Are</h1>
          <p className="card-body">
            We are Friends of SELVA Vida Sin Fronteras-U.S.A., a not-for-profit
            formed on March 1, 2019 in the State of Texas and qualifies as
            tax-exempt under Section 501 (c) (3) of the U.S. Internal Revenue
            Code. Our organization is focused on assisting the indigenous
            peoples of the Amazon Rainforest to have a viable and sustainable
            future. We intend to create an awareness of the need for preserving
            and protecting the Amazon Rainforest and it's indigenous communities
            through education, educational expeditions, and other means of
            support. We are partners with SELVA Vida Sin Fronteras in Ecuador
            and their supporters in Holland to achieve our goals.
          </p>
        </section>
        <section className="card mb-4 shadow-lg">
          <h2 className="card-header fs-1 fw-bold">Our Mission</h2>
          <p className="card-body">
            Our Mission is to protect the flora and fauna of the Amazon
            Rainforest, its ancestral indigenous communities, and the Galapagos
            Archipelago and Marine Reserve by increasing awareness for cultural
            and environmental preservation through educational experiences.
          </p>
        </section>
        <section className="card mb-4 shadow-lg">
          <h2 className="card-header fs-1 fw-bold">Our Vision</h2>
          <p className="card-body">
            Our Vision is to partner with indigenous communities and
            environmental organizations to help preserve the Ecuadorian Amazon
            Rainforest by providing educational expeditions, support related
            projects and an exchange of culture and arts. (Our institutional
            philosophy is guided by the principle that Nature and all forms of
            life have the Inalienable Right to Exist.”)
          </p>
        </section>
      </div>
    </div>
  );
};

export default WhoWeAre;
