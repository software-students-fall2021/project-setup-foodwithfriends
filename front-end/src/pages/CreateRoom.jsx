import "./CreateRoom.css";

import React from "react";
import { useHistory } from "react-router-dom";
import RoomButton from "../components/RoomButton";
import Spacer from "../components/Spacer";
import { post } from '../utils/request';
import PlacesAutocomplete from 'react-places-autocomplete';

const MAX_CAPACITY = 20;
const MIN_CAPACITY = 2;

function CreateRoom() {
  const history = useHistory();
  const [name, setName] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [capacity, setCapacity] = React.useState(2);

  const makeRoom = async () => {
    const response = await post(
      '/room',
      {
        name,
        location,
        capacity
      },
    );

    const roomId = response.roomId;
    history.push(`/invite`, { roomId: roomId });
  };

  return (
    <div className="CreateRoom">
      <div className="CreateRoom__title">Create a Room</div>

      <Spacer space="75" />

      <div className="CreateRoom__group">
        <div className="title">Group Name</div>
        <input
          className="CreateRoom__group__input"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>

      <Spacer space="25" />

      <div className="CreateRoom__location">
        <div className="title">Location</div>
        <div className="CreateRoom__container">
          <PlacesAutocomplete
            value={location}
            onChange={setLocation}
            onSelect={setLocation}>

            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div>
                <input id="location-bar"
                  {...getInputProps({
                    placeholder: 'Search ...',
                    className: 'CreateRoom__location__input',
                  })}
                />
                <div className="tooltip">
                  <img
                  id = "currLocIcon"
                  className="CreateRoom__location__logo"
                  src={process.env.PUBLIC_URL + "/location.png"}
                  alt="location"
                  onClick= {getCurrentLocation}
                  />
                  <span className="tooltip-text">Use Current location</span>
                </div>
                <div id ="search-results">
                  {loading && <div>Loading...</div>}
                  {suggestions.map((suggestion, i) => {
                    return (
                      <div {...getSuggestionItemProps(suggestion)} key={i}>
                        {suggestion.description}
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

          </PlacesAutocomplete>
        </div>
      </div>

      <Spacer space="25" />

      <div className="CreateRoom__friends">
        <div className="title">Number of Friends</div>
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

    return true;
  }

  function getCurrentLocation() {
    const logo = document.getElementById("currLocIcon");
    logo.src = `${process.env.PUBLIC_URL}/loop.png`;
    navigator.geolocation.getCurrentPosition((position) => {
      const {latitude, longitude} = position.coords;

      fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&location_type=APPROXIMATE&result_type=postal_code&key=${process.env.REACT_APP_GOOGLE_KEY}`)
        .then(response => response.json())
        .then(data => {
          const results = data["results"];

          if (results.length == 0) {
            setLocation("Unable to determine location.")
          }
          else {
            setLocation(results[0]["formatted_address"]);
            logo.src = `${process.env.PUBLIC_URL}/location.png`;
          }
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
