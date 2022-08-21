import Tagua from "../assets/img/Tagua.png";

const Blog = () => {
  return (
    <main data-testid="blog" className="">
      <section className="text-center bg-light p-4">
        <h1 className="container display-1">Friends of SELVA Blog</h1>
      </section>
      <section className="card p-4 p-md-5 mb-4 text-white rounded bg-dark">
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title display-4 fst-italic">
                Inspiration from the Rainforest
              </h2>
              <p className="card-text lead my-3">
                It's easy to sit in a comfortable armchair dreaming of saving
                the world or at least having some impact on the environment.
                It's quite another thing to walk through ancient forests and
                along the Amazon rainforest basin, experiencing natural forces
                at work.
              </p>
              <p className="card-text lead mb-0">
                <a href="#" className="text-white fw-bold">
                  Continue reading...
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-2">
            <img
              src={Tagua}
              alt="Sculpture wood and woven fabric resembling seed pods hanging from a branch"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
