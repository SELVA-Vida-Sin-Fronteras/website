import Tagua from "../assets/img/Tagua.png";
import river from "../assets/img/blog-img.jpg";

const Blog = () => {
  return (
    <div data-testid="blog" className="container">
      <section className="text-center bg-light">
        <h1 className="container display-1">Friends of SELVA Blog</h1>
      </section>

      <section className="featured card p-4 p-md-5 mb-4 text-white rounded bg-dark">
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
            className="img-fluid"
              src={Tagua}
              alt="Sculpture wood and woven fabric resembling seed pods hanging from a branch"
            />
          </div>
        </div>
      </section>
            <section className="blog-posts p-4">
              <article className="text-dark fs-4">
                <h2 className="display-6">
                  November 22, 2021 - Judith Farsone
                </h2>
                <h3 className="display-3">Friends of The Amazon Rainforest</h3>
                <img
                  className="img-responsive w-100"
                  src={river}
                  alt="Rico River at sunset"
                />
                <p>Rico River at sunset, Cuyabeno National Park, Ecuador</p>
                <p>Photo by Cecilia VonHolck</p>
                <p>
                  Mission: Friends of Selva Vida Sin Fronteras - USA increases
                  awareness of the need for cultural and environmental
                  preservation by providing educational experiences through eco
                  tours in the Ecuadorian Amazon Rainforest.
                </p>
              </article>
            </section>

            <h2 className="display-2">Archives</h2>
            <ul className="list-group">
              <li className="list-group-item fs-3">
                <a className="archive-link" href="#">November 15, 2021</a>
              </li>
              <li className="list-group-item fs-3">
                <a className="archive-link" href="#">November 2, 2021</a>
              </li>
              <li className="list-group-item fs-3">
                <a className="archive-link" href="#">October 27, 2021</a>
              </li>
              <li className="list-group-item fs-3">
                <a className="archive-link" href="#">October 26, 2021</a>
              </li>
              <li className="list-group-item fs-3">
                <a className="archive-link" href="#">May 5, 2021</a>
              </li>
            </ul>
    </div>
  );
};

export default Blog;
