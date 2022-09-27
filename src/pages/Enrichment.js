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
            <h3>May 5-18, 2023</h3>
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

          <SignUpForm />

          <section data-testid="itinerary">
            <h2 className="text-uppercase">
              May 2023 Enrichment Journey Schedule
            </h2>

            <table className="table bg-light my-4">
              <thead className="table-dark">
                <tr>
                  <th>Day</th>
                  <th>Date</th>
                  <th>Agenda</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Day 1:</td>
                  <td>5/5/23</td>
                  <td>Arrive in Quito, transfer to Airport Holiday Inn</td>
                </tr>
                <tr>
                  <td>Day 2:</td>
                  <td>5/6/23</td>
                  <td>
                    Travel by van to Riobamba for a stay at La Andaluza Hacienda
                    and visit to Quilotoa Crater Lake.
                  </td>
                </tr>
                <tr>
                  <td>Day 3:</td>
                  <td>5/7/23</td>
                  <td>
                    Leave for Cuenca with a stop at the Ingapirca Inca Ruins.
                    Stay at Boutique Hotel Santa Lucia
                  </td>
                </tr>
                <tr>
                  <td>Day 4:</td>
                  <td>5/8/23</td>
                  <td>
                    Visit the Panama Hat Factory. Visit a 3rd generation weaver
                    who works with natural dyes, fibers and a backstrap loom to
                    design ponchos, scarves, wall hangings and rugs. Stay a
                    second night at Boutique Hotel Santa Lucia.
                  </td>
                </tr>
                <tr>
                  <td>Day 5:</td>
                  <td>5/9/23</td>
                  <td>
                    Breakfast, flight to Quito, city tour, archeological museum
                    with lunch, stay at Hotel Mercure Alamende
                  </td>
                </tr>
                <tr>
                  <td colSpan={3}>
                    <h2 className="text-uppercase">Rainforest</h2>
                  </td>
                </tr>
                <tr>
                  <td>Day 6:</td>
                  <td>5/10/23</td>
                  <td>
                    Breakfast. Return to Quito airport/flight to the village of
                    Coca. Van to Amazon Dolphin Reserve. Night Hike. Dinner
                    included. Stay at Amazon Dolphin Reserve
                  </td>
                </tr>
                <tr>
                  <td>Day 7:</td>
                  
                  <td>5/11/23</td>
                  <td>
                    Early morning paddle canoe ride on Pañacocha Lake. Learn
                    about medicinal plants and watch for wildlife. Lunch in the
                    rainforest, piranha catch/release, watch for pink dolphins.
                    Lunch and dinner included. Stay at Amazon Dolphin Reserve
                  </td>
                </tr>
                <tr>
                  <td>Day 8:</td>
                  <td>5/12/23 </td>
                  <td>
                    Cultural day and visit to the Kichwa community, enjoy local
                    crafts. Learn about the traditional use of blow guns and
                    darts. Travel on Napo River, stop at clay licking wall to
                    see parrots and parakeets. Lunch with and dinner included.
                    Stay at Amazon Dolphin Reserve
                  </td>
                </tr>
                <tr>
                  <td>Day 9:</td>
                  <td>5/13/23</td>
                  <td>
                    4th Optional activities. Lunch and dinner included. Canoe
                    trip to final stop for and night activities and overnight
                    stay at Yarino Lodge
                  </td>
                </tr>
                <tr>
                  <td>Day 10:</td>
                  <td>5/14/23</td>
                  <td>
                    Morning canoe back to Coca for a morning flight back to
                    Quito in preparation to fly home or stay one night to attend
                    the Galapagos extension journey. Airport Holiday Inn
                  </td>
                </tr>
                <tr>
                  <td colSpan={3}>
                    <h2 className="text-uppercase">Galapagos</h2>
                  </td>
                </tr>
                <tr>
                  <td>Day 11:</td>
                  <td> 5/15/23</td>
                  <td>
                    Fly into the Galapagos from Quito and go by water taxi to
                    San Cristobal Island. Afternoon for Tijeretas or Loberias
                    hike and snorkeling
                  </td>
                </tr>
                <tr>
                  <td>Day 12:</td>
                  <td>5/16/23</td>
                  <td>360-degree tour around San Cristobal</td>
                </tr>
                <tr>
                  <td>Day 13:</td>
                  <td>5/17/23</td>
                  <td>Hiking and snorkeling around San Cristobal Island</td>
                </tr>
                <tr>
                  <td> Day 14:</td>
                  <td>5/18/23 </td>
                  <td>Flight back to Quito. Return to USA from Quito</td>
                </tr>
                <tr>
                  <td colSpan={3}>
                    <h2>
                      <span className="text-uppercase">Three Options</span>{" "}
                      (Including hotel accommodations and breakfast):
                    </h2>
                  </td>
                </tr>
                <tr>
                  <td colSpan={3}>
                    <ol>
                      <li> 10 days/9 nights: $3,442</li>
                      <li> Rainforest only: (5 days/4 nights): $1,765</li>
                      <li>
                        14 day journey with the Galapagos extension: $5,285
                      </li>
                    </ol>
                    $20.00 tourism fee and $100.00 entrance fee to the Galapagos
                    Islands not included.
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Enrichment;
