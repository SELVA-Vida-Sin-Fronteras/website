import nov2221 from "../assets/img/nov-22-21.jpg";
import nov1521 from "../assets/img/nov-15-21.jpg";
import nov0221 from "../assets/img/nov-2-21.jpg";
import oct2721 from "../assets/img/oct-27-21.jpg";
import oct2621 from "../assets/img/oct-26-21.jpg";
import may0521 from "../assets/img/may-5-21.jpg";

const Blog = () => {
  return (
    <div data-testid="blog" className="p-5 page">
      <h1 className="text-center mb-5">Friends of SELVA Blog</h1>
      <article className="card p-5 m-auto mb-5" style={{ maxWidth: "60rem" }}>
        <h2>November 22, 2021</h2>
        <h3>Friends of the Amazon Rainforest</h3>
        <p>Written by Judith Fasone</p>
        <img
          src={nov2221}
          alt="Rico River at sunset, Cuyabeno National Park, Ecuador"
        ></img>
        <p>Photo by Cecilia VonHolck</p>

        <p>Rico River at sunset, Cuyabeno National Park, Ecuador</p>
        <p>
          Mission: Friends of Selva Vida Sin Fronteras - USA increases awareness
          of the need for cultural and environmental preservation by providing
          educational experiences through eco tours in the Ecuadorian Amazon
          Rainforest.
        </p>
        <p>Judith Fasone</p>
      </article>
      <article className="card p-5 m-auto mb-5" style={{ maxWidth: "60rem" }}>
        <h1>November 15, 2021</h1>
        <h2>Aboriginal Museum</h2>
        <img src={nov1521} alt="A display of various works of pottery"></img>
        <p>Written by Judith Fasone</p>
        Cuenca, Ecuador, has one of the most extensive exhibits of artifacts I
        have ever seen. I would be happy to spend a half of a day here. During
        our short visit, thunder, lightening and hail occurred. The display is
        on the third floor, and my only thought was the ancestors recognizing
        and blessing our work and our visit. Thank you Grandmother and
        Grandfather!
      </article>
      <article className="card p-5 m-auto mb-5" style={{ maxWidth: "60rem" }}>
        <h1>November 2, 2021</h1>
        <h2>The Ancients</h2>
        <p>Written by Judith Fasone</p>
        <img src={nov0221} alt="Ingapirca, Canari lodge"></img>
        <p>Ingapirca, Canari lodge</p>
        <p>
          Visiting Ingapirca and the “Tomba de Canaries”. Taking a bus 46 KM
          outside of Cuenca, Ecuador, we walked the ceremonial land of the
          ancients. The Canaries (can yar'ies) build the first site. Matriarchal
          in nature, river stones were used to build the structures and
          underground grain storage containers. These smooth round rocks, left
          in their natural state, imposed a softness on the landscape. In the
          tomb, a high priestess was found, surrounded by 7 younger handmaidens.
          A poisen was taken and they were laid in a fetal position, encircling
          her. This signified a return to the Earth, prepared for rebirthing.
          Are we those women?
        </p>
      </article>
      <article className="card p-5 m-auto mb-5" style={{ maxWidth: "60rem" }}>
        <h1>October 27, 2021</h1>
        <h2>Artist Talk</h2>
        <p>Written by Judith Farsone</p>
        <img
          src={oct2721}
          alt="sculpture fiber and wood resembling caccoons"
        ></img>
        <p>
          Artist talk by Char Norman and Helen Hoffelt about their exhibition
          Frayed: A World in Peril at Ohio Dominican University Wehrle Gallery
        </p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/MbFdyHm9UPo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </article>
      <article className="card p-5 m-auto mb-5" style={{ maxWidth: "60rem" }}>
        <h1>October 26, 2021</h1>
        <h2>Exploring Ecuador, virtually</h2>
        <img src={oct2621} alt="Amazon River"></img>
        <p>
          While we have been taking good care of ourselves here in the states,
          the same has been happening all over the world. Recently returning
          from Ecuador, the scouting trip for our 2022 tour has sadly ended, and
          you can see the beauty of the trip through these photos. The planning
          begins for our fall 2022 tour. Stay tuned!
        </p>
      </article>
      <article className="card p-5 m-auto mb-5" style={{ maxWidth: "60rem" }}>
        <h1>May 5, 2021</h1>
        <h2>Inspiration from the Rainforest</h2>
        <p>Written by Char Norman</p>
        <img
          src={may0521}
          alt="Scuplture wood and woven fabric resembling seed pods"
        ></img>
        <p>
          It's easy to sit in a comfortable armchair dreaming of saving the
          world or at least having some impact on the environment. It's quite
          another thing to walk through ancient forests and along the Amazon
          rainforest basin, experiencing natural forces at work.
        </p>
        <p>
          Traversing an area that sustains our life on earth is a humbling
          experience not to mention the incredible spirituality and inspiration
          seeping into one's soul. As a lifelong environmental artist, I have
          done just that-worked in the studio trying to impact my audiences'
          awareness of the natural world without fully experiencing the real
          thing.
        </p>
        <p>
          Of course, I was well aware of the importance of the rainforest and
          its biodiversity, but It was not until I traveled to the rainforest,
          that I truly felt the deeper connection to the environment. An
          eyewitness account and meeting the indigenous peoples was beyond
          anything I could have imagined. The deep connection and understanding
          of the ecosystem by these people are things that must be preserved.
          They are truly the keepers of the ancient knowledge of plants, animals
          and medicinal practices that can possibly have a huge impact on
          western attitudes, lifestyles, and health.
        </p>
        <p>
          I don't pretend to have gained a working knowledge of the rainforest
          and its treasures but did witness enough to know that there is a great
          deal to be gained by its preservation and support of the indigenous
          tribes living within its borders.
        </p>
        <p>
          Upon return, my own work as an artist, drew upon the inspiration and
          spirituality felt in the rainforest. The colors, shapes, nuances of
          meaning have all manifested themselves in work which I hope will alert
          others to the importance of environmental awareness and stewardship.
        </p>
        <p>
          I am looking forward to a future trip to the Amazon, learning more
          about the treasures within and the people who sustain and are
          sustained by the rainforest, and creating more work addressing the
          need to preserve and learn from the environment.
        </p>
      </article>
    </div>
  );
};

export default Blog;
