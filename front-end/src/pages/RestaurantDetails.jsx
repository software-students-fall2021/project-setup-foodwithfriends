import "./RestaurantDetails.css";
import restaurauntPlaceholder from "../img/restauraunt-placeholder-large.jpeg";
import React from "react";
import Button from "../components/Button";

const data = {
  restaurant_name: "Silver Spurs",
  restaurant_phone: "(212) 228-2333",
  restaurant_website:
    "http://www.grubhub.com/nyc/silver-spurs-on-laguardia-place/",
  hours: "Daily: 6am-11pm",
  price_range: "$$",
  restaurant_id: 4072702673999819,
  cuisines: ["American", "Burgers", "Diner"],
  address: {
    city: "New York",
    state: "NY",
    postal_code: "10012",
    street: "490 Laguardia Pl",
    formatted: "490 Laguardia Pl New York, NY 10012",
  },
  geo: { lat: 40.727026, lon: -73.999819 },
  menus: [],
  last_updated: "2020-10-01T15:13:42.654Z",
};

function RestaurantDetails(props) {
  return (
    <div className="RestaurantDetails">
      <div className="page-container">
        <div className="page-container-item">
          <h3>The Gourmet Soup and Bread House</h3>
          <img src={restaurauntPlaceholder}></img>
        </div>
        <h4>Restauraunt Info</h4>
        <div className="basic-info">
          <p>
            <b>Address:</b> {data.address.formatted}
          </p>
          <p>
            <b>Phone:</b> {data.restaurant_phone}
          </p>
          <p>
            <b>Website:</b>{" "}
            <a href={data.restaurant_website}>{data.restaurant_website}</a>
          </p>
          <p>
            <b>Hours:</b> {data.hours}
          </p>
          <p>
            <b>Cuisine Types:</b> {data.cuisines.join(", ")}
          </p>
        </div>
        <div className="page-container-item">
          <h4>Directions</h4>
          <div className="map-container">
            <iframe
              width="600"
              height="450"
              loading="lazy"
              className="google-maps-iframe"
              allowfullscreen
              src={`https://www.google.com/maps/embed/v1/place?q=${data.geo.lat},${data.geo.lon}&key=AIzaSyB_AxybqGJ-K6-3Jr9efLKXdZX_L7pMJ8I`}
            ></iframe>
          </div>
          <Button>Reserve a Table</Button>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetails;
