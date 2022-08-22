import { slides } from "../Data/Slides";

const Enrichment = () => {
  return (
    <div
      data-testid="enrichment"
      className="bg-light p-5 justify-content-center"
    >
      <div className="container">
        <section className="card m-auto" style={{ maxWidth: "40rem" }}>
          <h1 className="card-title card-header">Ecuador Enrichment Journey</h1>

          <p className="card-body">May 5-19, 2023</p>
        </section>
        <div
          id="carouselExampleControls"
          className="carousel slide my-5"
          data-bs-ride="carousel"
          aria-hidden="true"
        >
          <div className="carousel-inner">
            {slides.map((slide, i) => (
              <div
                key={i}
                className={i === 0 ? "carousel-item active" : "carousel-item"}
                data-interval="10000"
                style={{ height: "60rem" }}
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
        <h2>Ecuador Enrichment Journey</h2>
        <h3>May 5-19, 2023</h3>
        <p>
          Join an exciting adventure to Ecuador, the Amazon Rainforest, and the
          Galapagos Islands. Experience the riches of the forest, local artisans
          at work, and ancient history of the area. Options include the full
          experience of a 14-day trip, shorter 10-day or 5-day trip. Excellent
          guides and competitive prices.
        </p>
        <p>
          Our Mission is to protect the flora and fauna of the Amazon
          Rainforest, its ancestral indigenous communities, and the Galapagos
          Archipelago and Marine Reserve by increasing awareness for cultural
          and environmental preservation through educational experiences.
        </p>


        A portion of all fees goes to support our mission and specifically the
        Amazon Reserve for Peace For detailed

        Schedule
Day 1: Arrive in Quito-transfer to Hotel Wyndham
Day 2: Travel by van to Riobamba for a stay at La Andaluza
Hacienda and visit to Quilotoa Crater Lake.
Day 3: Leave for Cuenca with a stop at the Ingapirca Inca
Ruins. Stay at Boutique Hotel Santa Lucia
Day 4: Visit the Panama Hat Factory
Visit a 3rd generation weaver who works with natural
dyes, fibers and a backstrap loom to design ponchos,
scarves, wall hangings and rugs.
Day 5: Flight to Quito and Amazon Rainforest, Coca Pueblo.
Night hike.
Day 6: Amazon Dolphin Lodge
Early morning paddle canoe ride on Pañacocha Lake.
Learn about medicinal plants and watch for wildlife.
Lunch in the jungle then piranha fishing, watch for
pink dolphins
Day 7: Hike in the forest
Afternoon learn about how to use blowguns and
other indigenous activities.
After dinner night paddle canoe ride to enjoy the
magic at night and another chance to spot pink
dolphins
Day 8-9: Cultural day -a visit to the Kichwa community, enjoy
local crafts plus a traditional amazon meal.
Travel on Napo River, stop at clay licking wall to see
parrots and parakeets, final stop at Yarina Lodge for
overnight and night activities
Day 10: Morning canoe back to Coca for a morning flight
back to Quito in preparation for Galapagos
Day 11: Fly into the Galapagos from Quito and go by water
taxi to San Cristobal Island. Afternoon for Tijeretas or
Loberias hike and snorkeling
Day 12: 360-degree tour around San Cristobal
Day 13: Hiking and snorkeling around San Cristobal Island
Day 14: Flight back to Quito. Return to US from Quito
https://www.friendsofselvausa.org/index.html

MAY 2023 ENRICHMENT JOURNEY
Quito-Cuenca-Rainforest
Per Person: 10 days Arriving May 5th Departing May 14th
$ 3243.00 per person
Includes: All Hotel Accommodations including all breakfasts
                 In Quito, Riobamba and Cuenca 
                 Tour Bus to Cuenca
                 3 hour weaving workshop including lunch
                 Airfare back to Quito
                 Entrance fee to Ingapirca Inca Archeological Site
                 Roundtrip Airfare from Quito to Coca
       Includes the Amazon Rainforest: 4 Nights 5Days
                 Land Transportation in Coca to the Dolphin Lodge
                 3 nights at the Amazon Dolphin Lodge
                 1 night at the Yarino Eco Lodge
                 All meals B-L-D
                 All Excursions/Rubber boots for hiking
                 All water and land transportation  
                 Bi-Lingual Tour Guide



Not included, Airfare to Ecuador, Lunches except for the one provided during the workshop and Dinners, non-alcohol and alcohol beverages, tips and gratuities to the bus driver and tour guide. 

Galapagos Islands Extension Journey: 3 Nights 4 Days 
$1780.00 Per Person from Monday May 15th returning Thursday May 18th, to catch international flights.  
Includes:  1st night hotel accommodation after returning from the Rainforest at Hotel Wyndam at the Quito Airport Sunday the 14th
                  Roundtrip Airfare from Quito to Galapagos Islands 
                  3 Nights Hotel Accommodations                 
                  All Land and Water Transportation
                  All Breakfasts
                  All Excursions/Snorkeling Equipment
                        (Travelers are welcome to bring their own.)                  
                  Bi-Lingual Naturalist Guide  

Total Price with the Galapagos extension:
$5024.00 Per Person

Not Included: 
$20.00 USD Transit Fee for the Galapagos
$100.00 USD Entrance Fee to the Galapagos to be paid at arrival.
Lunches and Dinners
Extra non-alcohol or alcoholic beverages.  

RAINFOREST JOURNEY ONLY

$2200.00 per person: 4 Nights 5 Days
Includes Roundtrip Airfare from Quito to Coca
Land and Water Transportation from Coca
3 Nights at the Amazon Dolphin Lodge
1 Night at the Yarino Eco Lodge
All Meals
All Excursions/Rubber Boots for Hiking
Bi-Lingual/Naturalist Tour Guide

Does Not Include:
Airfare from the United States to Quito, Ecuador
Additional non-alcohol and no alcoholic beverages 
Tips/Gratuities to the drivers and guides.   

      </div>
    </div>
  );
};

export default Enrichment;
