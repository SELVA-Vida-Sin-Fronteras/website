import { slides } from "../Data/Slides";

const Enrichment = () => {
  return (
    <div
      data-testid="enrichment"
      className=" justify-content-center page enrichment"
    >
      <div className="img-container-hero img-container-hero--journey">
        <section className="card card__hero m-auto">
          <h1 className="card-title card-header">Ecuador Enrichment Journey</h1>

          <p className="card-body">May 5-19, 2023</p>
        </section>
      </div>

      <div className="container p-5">
        <div
          id="carouselExampleControls"
          className="carousel slide my-4"
          data-bs-ride="carousel"
          aria-hidden="true"
        >
          <div className="carousel-inner">
            {slides.map((slide, i) => (
              <div
                key={i}
                className={i === 0 ? "carousel-item active" : "carousel-item"}
                data-interval="10000"
                // style={{ height: "20vh" }}
              >
                <img src={slide.path} className="d-block w-100" alt="" />
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <section className="journey-2023">
          <section className="info">
            <h2>Ecuador Enrichment Journey</h2>
            <h3>May 5-19, 2023</h3>
            <p>
              Join an exciting adventure to Ecuador, the Amazon Rainforest, and
              the Galapagos Islands. Experience the riches of the forest, local
              artisans at work, and ancient history of the area. Options include
              the full experience of a 14-day trip, shorter 10-day or 5-day
              trip. Excellent guides and competitive prices.
            </p>
            <p>
              Our Mission is to protect the flora and fauna of the Amazon
              Rainforest, its ancestral indigenous communities, and the
              Galapagos Archipelago and Marine Reserve by increasing awareness
              for cultural and environmental preservation through educational
              experiences.
            </p>

            <p>
              A portion of all fees goes to support our mission and specifically
              the Amazon Reserve for Peace For detailed
            </p>
          </section>
          <section className="schedule">
            <h2>Schedule</h2>
            <ol className="list-group">
              <li className="list-group-item">
                Day 1: Arrive in Quito-transfer to Hotel Wyndham
              </li>
              <li className="list-group-item">
                Day 2: Travel by van to Riobamba for a stay at La Andaluza
                Hacienda and visit to Quilotoa Crater Lake.
              </li>
              <li className="list-group-item">
                Day 3: Leave for Cuenca with a stop at the Ingapirca Inca Ruins.
                Stay at Boutique Hotel Santa Lucia
              </li>
              <li className="list-group-item">
                Day 4: Visit the Panama Hat Factory Visit a 3rd generation
                weaver who works with natural dyes, fibers and a backstrap loom
                to design ponchos, scarves, wall hangings and rugs.
              </li>
              <li className="list-group-item">
                Day 5: Flight to Quito and Amazon Rainforest, Coca Pueblo. Night
                hike.
              </li>
              <li className="list-group-item">
                Day 6: Amazon Dolphin Lodge Early morning paddle canoe ride on
                Pañacocha Lake. Learn about medicinal plants and watch for
                wildlife. Lunch in the jungle then piranha fishing, watch for
                pink dolphins
              </li>
              <li className="list-group-item">
                Day 7: Hike in the forest Afternoon learn about how to use
                blowguns and other indigenous activities. After dinner night
                paddle canoe ride to enjoy the magic at night and another chance
                to spot pink dolphins
              </li>
              <li className="list-group-item">
                Day 8-9: Cultural day -a visit to the Kichwa community, enjoy
                local crafts plus a traditional amazon meal. Travel on Napo
                River, stop at clay licking wall to see parrots and parakeets,
                final stop at Yarina Lodge for overnight and night activities
              </li>
              <li className="list-group-item">
                Day 10: Morning canoe back to Coca for a morning flight back to
                Quito in preparation for Galapagos
              </li>
              <li className="list-group-item">
                Day 11: Fly into the Galapagos from Quito and go by water taxi
                to San Cristobal Island. Afternoon for Tijeretas or Loberias
                hike and snorkeling
              </li>
              <li className="list-group-item">
                Day 12: 360-degree tour around San Cristobal
              </li>
              <li className="list-group-item">
                Day 13: Hiking and snorkeling around San Cristobal Island
              </li>
              <li className="list-group-item">
                Day 14: Flight back to Quito. Return to US from Quito
              </li>
            </ol>
          </section>

          <section className="pricing">
            <h2>May 2023 Enrichment Journey Pricing</h2>
            <h3>Quito-Cuenca-Rainforest</h3>

            <p>
              Per Person: 10 days Arriving May 5th Departing May 14th $ 3243.00
              per person
            </p>

            <p>Includes:</p>

            <ul>
              <li>All Hotel Accommodations including all breakfasts</li>
              <li>In Quito, Riobamba and Cuenca</li>
              <li>Tour Bus to Cuenca</li>
              <li>3 hour weaving workshop including lunch</li>
              <li>Airfare back to Quito</li>
              <li>Entrance fee to Ingapirca Inca Archeological Site</li>
              <li>Roundtrip Airfare from Quito to Coca</li>
            </ul>

            <p> Includes the Amazon Rainforest:</p>

            <ul>
              <li>4 Nights 5 Days</li>
              <li>Land Transportation in Coca to the Dolphin Lodge</li>
              <li>3 nights at the Amazon Dolphin Lodge</li>
              <li>1 night at the Yarino Eco Lodge</li>
              <li>All meals B-L-D</li>
              <li>All Excursions/Rubber boots for hiking</li>
              <li>All water and land transportation</li>
              <li>Bi-Lingual Tour Guide</li>
            </ul>

            <p>
              Not included, Airfare to Ecuador, Lunches except for the one
              provided during the workshop and Dinners, non-alcohol and alcohol
              beverages, tips and gratuities to the bus driver and tour guide.
            </p>

            <h3>Galapagos Islands Extension Journey: 3 Nights 4 Days </h3>
            <p>
              $1780.00 Per Person from Monday May 15th returning Thursday May
              18th, to catch international flights.
            </p>
            <p>Includes: </p>
            <ul>
              <li>
                1st night hotel accommodation after returning from the
                Rainforest at Hotel Wyndam at the Quito Airport Sunday the 14th
              </li>
              <li>Roundtrip Airfare from Quito to Galapagos Islands</li>
              <li>3 Nights Hotel Accommodations</li>
              <li>All Land and Water Transportation</li>
              <li>All Breakfasts</li>
              <li>
                All Excursions/Snorkeling Equipment (Travelers are welcome to
                bring their own.)
              </li>
              <li>Bi-Lingual Naturalist Guide</li>
            </ul>
            <p>Total Price with the Galapagos extension: $5024.00 Per Person</p>

            <p>
              Not Included: $20.00 USD Transit Fee for the Galapagos $100.00 USD
              Entrance Fee to the Galapagos to be paid at arrival. Lunches and
              Dinners Extra non-alcohol or alcoholic beverages.
            </p>

            <h3>Rainforest Journey Only</h3>
            <p>$2200.00 per person: 4 Nights 5 Days</p>
            <p>Includes:</p>
            <ul>
              <li>Roundtrip Airfare from Quito to Coca</li>
              <li>Land and Water Transportation from Coca</li>
              <li>3 Nights at the Amazon Dolphin Lodge</li>
              <li>1 Night at the Yarino Eco Lodge</li>
              <li>All Meals</li>
              <li>All Excursions/Rubber Boots for Hiking</li>
              <li>Bi-Lingual/Naturalist Tour Guide</li>
            </ul>

            <p>
              Does Not Include: Airfare from the United States to Quito, Ecuador
              Additional non-alcohol and no alcoholic beverages Tips/Gratuities
              to the drivers and guides.
            </p>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Enrichment;
