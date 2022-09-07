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
          <section className="schedule">
            <h2>Schedule</h2>
            <ol>
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
            <h2>May 2023 Enrichment Journey</h2>
            <section>
              <h3>
                Quito-Cuenca-Rainforest with Galapagos Island extension journey
                option.
              </h3>
              <p>15 day, 10 day, 5 day options</p>
              <p>Per Person: 10 days Arriving May 5th Departing May 14th</p>
              <p>Includes: All Hotel Accommodations including all breakfasts</p>

              <ul>
                <li>
                  May 5th Day 1, arrive by 9:00 pm to Quito
                  <ul>
                    <li>One night at Airport Holiday Inn B-included</li>
                  </ul>
                </li>
                <li>
                  May 6th Day 2 Breakfast and tour bus to Riobamba
                  <ul>
                    <li>One night La Andaluza Hacienda B-included</li>
                    <li>Hike at the Quilotoa Crater Lake</li>
                    <li>
                      Cost of lunch and dinner on our own, places to eat at La
                      Andaluza.
                    </li>
                  </ul>
                </li>
                <li>
                  May 7 Day 3 Breakfast, tour bus to Cuenca
                  <ul>
                    <li>Stop at Ingapirca Inca Ruins for a guided tour</li>
                    <li>Lunch on our own, options provided.</li>
                    <li>Arrive at Cuenca first night at the Boutique</li>
                    <li>Hotel Santa Lucia B-included</li>
                    <li>Dinner on our own, options provided</li>
                  </ul>
                </li>
                <li>
                  May 8th Day 4 Breakfast, tour bus to:
                  <ul>
                    <li>The Panama Hat Factory</li>
                    <li>
                      Bus to the town of Gualaceo and La Casa de la Makata. The
                      Jiménez family live and work there, keeping ancient
                      weaving and dying methods alive. Workshop with lunch
                      included: IKAT Weaving in Ecuador, A Colorful Cultural
                      UNESCO Treasure
                    </li>
                    <li>Dinner on our own, options provided</li>
                    <li>2nd night at Boutique Hotel Santa Lucia.</li>
                  </ul>
                </li>
                <li>
                  May 9th Day 5 Breakfast, fly back to Quito
                  <ul>
                    <li>Bus to Quito for a brief city tour</li>
                    <li>
                      Check in to Hotel Mercure Alamende for 1 night includes
                      breakfast.
                    </li>
                    <li>
                      Tour of an archeological museum Mindalae with lunch
                      included.
                    </li>
                    <li>
                      Dinner at restaurant El Ventanal with amazing views of the
                    </li>
                    <li>Capital of Ecuador. Dinner not included.</li>
                  </ul>
                </li>
                <li>
                  May 10th Day 6 Breakfast return to the Quito Airport (Day 1 in
                  the Rainforest)
                  <ul>
                    <li>Return by van to the airport/meet others coming</li>
                    <li>for only the Rainforest Journey.</li>
                    <li>
                      Fly to the village of Coca Transfer by van to the Amazon
                      Dolphin Reserve
                    </li>
                    <li>Lunch stop (not included)</li>
                    <li>Dinner at the reserve</li>
                    <li>Night hike</li>
                  </ul>
                </li>
                <li>
                  May 11th, Day 7 (Day 2 in the Rainforest)
                  <ul>
                    <li> Breakfast </li>
                    <li>Early morning canoe ride to enjoy the beauty of</li>
                    <li>
                      Pancocha Lake and walk on a trail to learn about medicinal
                      plants and with some luck wildlife. (Pink Dolphins)
                    </li>
                    <li>Lunch in the Rainforest</li>
                    <li>
                      In the afternoon learn about Piranha (catch & release) and
                      other wildlife in the river area.
                    </li>
                    <li>Dinner at the lodge</li>
                  </ul>
                </li>
                <li>
                  May 12th Day 8 (Day 3 in the Rainforest)
                  <ul>
                    <li>Breakfast</li>
                    <li>
                      This day is a cultural day we will visit the Kichwa
                      community to see their local crafts.{" "}
                    </li>
                    <li>
                      We will have a stop at a clay licking wall on Napo river
                      side to spot hopefully parrots and parakeets
                    </li>
                    <li>Lunch with Kichwa families.</li>
                    <li>Afternoon we keep going on Napo river towards</li>
                    <li>
                      Yarina Lodge reserve for our 4th night in the Rainforest
                    </li>
                    <li>Dinner</li>
                    <li>Optional night activity.</li>
                  </ul>
                </li>
                <li>
                  May 13th Day 9 (Day 4 in the Rainforest) 4th night at the
                  Yarino Lodge
                  <ul>
                    <li>Dinner</li>
                    <li>Optional night activity</li>
                  </ul>
                </li>

                <li>
                  May 14th Day 10 (Day 5 in the Rainforest, return to Quito and
                  flights home.
                  <ul>
                    <li>
                      After breakfast take the canoe and go back to Coca for a
                      morning flight back to Quito
                    </li>
                    <li>
                      People returning to their home states or countries will
                      fly that day.
                    </li>
                    <li>
                      People flying the next morning to the Galapagos Islands
                      will stay one night At the Airport Holiday Inn, Breakfast
                      included (There are only 2 flights to the Galapagos
                      Islands on Sunday, and we will not return in time from the
                      Rainforest.)
                    </li>
                  </ul>
                </li>

                <li>
                  Included in the Rainforest Journey:
                  <ul>
                    <li>Roundtrip airfare to Coca</li>
                    <li>All meals B-L-D</li>
                    <li>All Excursions/Rubber boots for hiking</li>
                    <li>All water and land transportation,</li>
                    <li>Bi-Lingual Tour Guide.</li>
                  </ul>
                  Not included, Airfare to Ecuador from other countries, lunches
                  except for the one provided during the workshop and the museum
                  lunch in Quito, Dinners, extra non-alcohol and alcohol
                  beverages, tips and gratuities to the bus driver and tour
                  guide. $3425.00 for the 10 day journey
                </li>
              </ul>
            </section>

            <section>
              <h3>Galapagos Extension</h3>
              <p>
                Galapagos Islands Extension Journey: May 14th Return May 18th
              </p>
              <p>$1843.00 for 4 days and 4 nights, 3 nights on the Galapagos</p>
              <p>Includes: </p>
              <ul>
                <li>1 night Holiday Inn Airport Quito w/breakfast</li>
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
              <p>Total Price with the Galapagos extension: $5268.00</p>
              Not Included is the U.S dollars $20.00 transit fee or the $100
              Galapagos entry fee to be paid in cash before entering.
            </section>
            <section>
              <h3>RAINFOREST JOURNEY ONLY</h3>

              <p>$1765.00 per person 4 nights 5 days Includes:</p>

              <ul>
                <li>Roundtrip Airfare from Quito to Coca</li>
                <li>Land and Water Transportation from Coca</li>
                <li>3 Nights at the Amazon Dolphin Lodge</li>
                <li>1 Night at the Yarino Eco Lodge</li>
                <li>All Meals</li>
                <li>All Excursions/Rubber Boots for Hiking</li>
                <li>Bi-Lingual/Naturalist Tour Guide</li>
              </ul>
              <p>None of the journeys include:</p>
              <ul>
                <li>Airfare from the United States to Quito, Ecuador</li>
                <li>Alcoholic Beverages</li>
                <li>Tips/Gratuities to the drivers and guides.</li>
              </ul>
            </section>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Enrichment;
