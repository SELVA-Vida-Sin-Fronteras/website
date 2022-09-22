import SignUpForm from "../components/SignUpForm";
const Enrichment = () => {
  return (
    <div
      data-testid="enrichment"
      className=" justify-content-center page enrichment"
    >
      <div
        className="img-container-hero img-container-hero--journey m-auto"
        style={{ maxWidth: 700 }}
      ></div>

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
              the Amazon Reserve for Peace.
            </p>
          </section>
          <section data-testid="itinerary" className="my-5">
            <h2>May 2023 Trip Itinerary </h2>
            <table className="table bg-light my-4">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Plan</th>
                  <th>Hotel (meals)</th>
                  <th colSpan="2">Day/Night</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-success">
                  <td>5/5/23</td>
                  <td>All guests arrive by 9pm</td>
                  <td>Airport Holiday Inn (B)</td>
                  <td>1/1</td>
                  <td></td>
                </tr>
                <tr className="table-success">
                  <td>5/6/23</td>
                  <td>
                    <ul>
                      <li>
                        Travel by van to Riobamba for a stay at La Andaluza
                        Hacienda and a visit to Quilotoa Crater Lake.
                      </li>
                    </ul>
                  </td>
                  <td>La Andaluza Hacienda</td>
                  <td>2/2</td>
                  <td></td>
                </tr>
                <tr className="table-success">
                  <td>5/7/23</td>
                  <td>
                    <ol>
                      <li>Breakfast</li>
                      <li>Tour bus to Cuenca</li>
                      <li>Stop at Ingapirca Inca Ruins for a guided tour.</li>
                    </ol>
                  </td>
                  <td>La Andaluza Hacienda (B)</td>
                  <td>3/3</td>
                  <td></td>
                </tr>
                <tr className="table-success">
                  <td>5/8/23</td>
                  <td>
                    <ol>
                      <li>Breakfast</li>
                      <li>Tour Bus to Panama Hat Factory</li>
                      <li>
                        Bus to the town of Gualaceo and La Casa de la Makata
                      </li>
                      <li>
                        Weaving and natural dye workshop with the Jiménez
                        family, 3 generations of weavers
                      </li>
                      <li>Lunch</li>
                    </ol>
                  </td>
                  <td>Boutique Hotel Santa Lucia (B)</td>
                  <td>4/4</td>
                  <td></td>
                </tr>
                <tr className="table-success">
                  <td>5/9/23</td>

                  <td>
                    <ol>
                      <li>Breakfast</li>
                      <li>fly to Quito</li>
                      <li>City Tour</li>
                      <li> Archeological Mindalae Museum (lunch included). </li>
                      <li>
                        Dinner at El Ventanal with amazing views of the Capital
                        (dinner cost not included)
                      </li>
                    </ol>
                  </td>
                  <td>Hotel Mercure Alamende (B)</td>
                  <td>5/5</td>
                  <td></td>
                </tr>
                <tr className="table-danger">
                  <td>5/10/23</td>
                  <td>
                    <ol>
                      <li>Return to Quito Airport</li>
                      <li>Fly to village of Coca</li>
                      <li>Van to Amazon Dolphin Reserve</li>
                      <li>Night Hike</li>
                    </ol>
                  </td>
                  <td>Amazon Dolphin Reserve (BLD)</td>
                  <td>6/6</td>

                  <td>1/1</td>
                </tr>
                <tr className="table-danger">
                  <td>5/11/23</td>
                  <td>
                    <ol>
                      <li>Breakfast</li>
                      <li>Canoe ride at Pancocha Lake</li>
                      <li>Piranha catch and release</li>
                      <li>
                        3 hour hike to learn about medicinal plants and
                        wildlife.
                      </li>
                    </ol>
                  </td>
                  <td>Amazon Dolphin Reserve (BLD)</td>
                  <td>7/7</td>
                  <td>2/2</td>
                </tr>
                <tr className="table-danger">
                  <td>5/12/23</td>
                  <td>
                    <ol>
                      <li>Breakfast</li>
                      <li>Visit Kichwa community</li>
                      <li>clay licking wall on Napo</li>
                      <li>River, Lunch with Kichwa Family (included)</li>
                      <li>night activity (optional)</li>
                    </ol>
                  </td>
                  <td>Amazon Dolphin Reserve (BLD)</td>
                  <td>8/8</td>
                  <td>3/3</td>
                </tr>
                <tr className="table-danger">
                  <td>5/13/23</td>
                  <td>
                    <ol>
                      <li>Napa River Canoe trip</li>
                      <li>Pink River Dolphn sightseeing</li>
                      <li>NightActivity (optional)</li>
                    </ol>
                  </td>
                  <td>Yarina Lodge Reserve (BLD)</td>
                  <td>9/9</td>
                  <td>4/4</td>
                </tr>
                <tr className="table-danger">
                  <td>5/14/23</td>
                  <td>
                    <ol>
                      <li>Breakfast</li>
                      <li>boat back to Coca for Flight to Quito.</li>
                    </ol>
                    <ul>
                      <li>
                        Individuals returning home on 05/14 can remain at the
                        Quito Airport for late afternoon/evening departures.
                      </li>
                      <li>Remaining travelers will stay overnight</li>
                    </ul>
                  </td>
                  <td>Holiday Inn (B)</td>
                  <td>10/9</td>
                  <td>5/4</td>
                </tr>
                <tr>
                  <td>5/15/23</td>
                  <td>
                    <ol>
                      <li>
                        Fly into the Galapagos from Quito and go by water taxi
                        to San Cristobal Island.
                      </li>
                      <li>
                        Afternoon for Tijeretas or Loberias hike and snorkeling
                      </li>
                    </ol>
                  </td>
                </tr>
                <tr>
                  <td>5/16/23</td>
                  <td>
                    <ul>
                      <li>360-degree tour around San Cristobal</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>5/17/23</td>
                  <td>
                    <ul>
                      <li>Hiking and snorkeling around San Cristobal Island</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>5/18/23</td>
                  <td>
                    <ul>
                      <li>Flight back to Quito. Return to USA from Quito</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td colSpan="5">
                    Hotel selection with breakfast included to be announced.
                    Lunch, dinner, gratuities not included. US $20.00 transit
                    fee and the $100.00 Galapagos entry fee to be paid in cash
                    before entering is not included.
                  </td>
                </tr>
                <tr>
                  <td colSpan="5">
                    U.S. currency is the official currency since 2000 of Ecuador
                    and the Galapagos Islands.
                  </td>
                </tr>
                <tr>
                  <td colSpan="5" className="text-center">
                    <ul>
                      <li className="list-group-item fs-3">
                      Quito and Rainforest trip (10 days/9 nights): $3,442
                      </li>
                      <li className="list-group-item fs-3">
                        Rainforest Only (5 days/4 nights): $1,765
                      </li>
                      <li className="list-group-item fs-3">
                        Galapagos trip (4 days /3 nights): $1,843
                      </li>
                      <li className="list-group-item fs-3 text-uppercase fw-bold">
                        Full Cost: $5,285
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <SignUpForm />
        </section>
      </div>
    </div>
  );
};

export default Enrichment;
