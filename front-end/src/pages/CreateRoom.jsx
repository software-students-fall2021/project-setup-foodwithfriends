import "./CreateRoom.css";

import React from "react";
import { useHistory } from "react-router-dom";
import RoomButton from "../components/RoomButton";
import Spacer from "../components/Spacer";
import { room_post } from "../utils/api";
import { useEffect } from 'react';

const MAX_CAPACITY = 20;
const MIN_CAPACITY = 2;

function CreateRoom() {
  const history = useHistory();
  const [name, setName] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [capacity, setCapacity] = React.useState(2);

  const makeRoom = async () => {
    const data = await room_post(name, location, capacity);
    const roomId = data.roomId;
    history.push(`/invite`, { roomId: roomId });
  };

  useEffect(() => {
    // load google scripts dynamically
    const gScript = document.createElement('script');
    gScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_KEY}&libraries=places&callback=initMap`;
    gScript.async = true;

    const funcScript = document.createElement('script');
    funcScript.type = "text/javascript";
    
    const code = `
      function initMap() {
        const input = document.getElementById("location-bar");

        let autocomplete = new google.maps.places.Autocomplete(input, {
          componentRestrictions: {"country": ["us"]},
          fields: ["formatted_address"]
        });
        autocomplete.addListener("place_changed", () => {

          let setValue = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
          const userSelect = input.value;
          console.log("value is " + input.value);
          setValue.call(input, userSelect);
          input.dispatchEvent(new Event('input', { bubbles: true }));
        });
      }
    `;

    funcScript.appendChild(document.createTextNode(code));
    
    document.body.appendChild(funcScript);
    document.body.appendChild(gScript);

    // Remove google scripts from DOM
    return () => {
      window.google = null;
      let keywords = ['maps.googleapis'];
      let scripts = document.head.getElementsByTagName("script");
      for (let i = scripts.length - 1; i >= 0; i--) {
        let scriptSource = scripts[i].getAttribute('src');
        if (scriptSource != null) {
            if (keywords.filter(item => scriptSource.includes(item)).length) {
                scripts[i].remove();
            }
        }
      }

      const searchContainer = document.getElementsByClassName("pac-container")[0];
      document.body.removeChild(gScript);
      document.body.removeChild(funcScript);
      document.body.removeChild(searchContainer);
    }
  }, []);

  return (
    <div className="CreateRoom">
      <div className="CreateRoom__title">Create a Room</div>

      <Spacer space="75" />

      <div className="CreateRoom__group">
        <div class = "title">Group Name</div>
        <input
          className="CreateRoom__group__input"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>

      <Spacer space="25" />

      <div className="CreateRoom__location">
        <div class = "title">Location</div>
        <div className="CreateRoom__container">
          <input
            id = "location-bar"
            className="CreateRoom__location__input"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            placeholder = "Search..."
          />
          <div className="tooltip">
            <img
              className="CreateRoom__location__logo"
              src={process.env.PUBLIC_URL + "/location.png"}
              alt="location"
              onClick= {getCurrentLocation}
            />
            <span className="tooltip-text">Use Current location</span>
          </div>
        </div>
      </div>

      <Spacer space="25" />

      <div className="CreateRoom__friends">
        <div class = "title">Number of Friends</div>
        <div className="CreateRoom__friends__number">
          <div
            className="CreateRoom__friends__number__increment"
            onClick={onClickIncrement}
          >
            +
          </div>
          <span className="CreateRoom__friends__number__value">{capacity}</span>
          <div
            className="CreateRoom__friends__number__decrement"
            onClick={onClickDecrement}
          >
            -
          </div>
        </div>
      </div>

      <Spacer space="110" />
      <RoomButton
        onClick={() => {
          if (validateForm()) {
            makeRoom();
          }
        }}
        content="Continue"
      />
    </div>
  );

  function validateForm() {
    const inputs = document.getElementsByTagName("input");

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].classList.remove("error-border");
    }

    for (let i = 0; i < inputs.length; i++) {
      if ((inputs[i].value).trim() == "") {
        inputs[i].classList.add("error-border");
        return false;
      }
    }
    console.log("NAME IS " + name);
    console.log("LOCATION IS " + location);

    return true;
  }

  function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      const {latitude, longitude} = position.coords;

      fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&location_type=APPROXIMATE&result_type=postal_code&key=${process.env.REACT_APP_GOOGLE_KEY}`)
        .then(response => response.json())
        .then(data => {
          const results = data["results"];
          const locationBar = document.getElementById("location-bar");

          let setValue = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
          
          if (results.length == 0) {
            setValue.call(locationBar, "Unable to determine location.");
          }
          else {
            const fullAddress = results[0]["formatted_address"];
            const address_components = results[0]["address_components"];

            let zipcode;
            for (let i = 0; i < address_components.length; i++) {
              for (let j = 0; j < address_components[i].types.length; j++) {
                if (address_components[i].types[j] == "postal_code") {
                  zipcode = address_components[i]["short_name"];
                  break;
                }
              }
            }
            console.log("THE ZIPCODE IS " + zipcode);
            setValue.call(locationBar, fullAddress);
          }

          locationBar.dispatchEvent(new Event('input', { bubbles: true }));
        });
    });
  }

  function onClickIncrement() {
    if (capacity >= MAX_CAPACITY) return;
    setCapacity(capacity + 1);
  }

  function onClickDecrement() {
    if (capacity <= MIN_CAPACITY) return;
    setCapacity(capacity - 1);
  }
}

export default CreateRoom;
