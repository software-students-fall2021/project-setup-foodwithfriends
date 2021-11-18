import "./CreateRoom.css";

import React from "react";
import Button from "../components/Button";
import Spacer from "../components/Spacer";
import { post } from '../utils/request';
import PlacesAutocomplete, {geocodeByAddress, getLatLng} from 'react-places-autocomplete';

import { useHistory } from "react-router-dom";
import { validateForm } from "../utils/validation"

const MAX_CAPACITY = 20;
const MIN_CAPACITY = 2;

function CreateRoom() {
  const history = useHistory();
  const [name, setName] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [latitude, setLat] = React.useState("");
  const [longitude, setLong] = React.useState("");
  const [capacity, setCapacity] = React.useState(2);

  const makeRoom = async () => {
    const response = await post(
      '/room',
      {
        name,
        location,
        latitude,
        longitude,
        capacity
      },
    );

    const roomId = response.roomId;
    history.push(`/invite`, { roomId: roomId });
  };

  const handleSelect = async value => {
    setLocation(value);
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setLat(latLng.lat);
    setLong(latLng.lng);
  }

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
            onSelect={(val) => {handleSelect(val)}}>

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

      <div className="CreateRoom__price">
        <div className="title">Price</div>
        <div className="CreateRoom__buttons">
          <div
            className="CreateRoom__buttons__option"
            onClick={() => setPrice('$')}
            style={setSelectedStyle('$')}
          >
            $
          </div>
          <div
            className="CreateRoom__buttons__option"
            onClick={() => setPrice('$$')}
            style={setSelectedStyle('$$')}
          >
            $$
          </div>
          <div
            className="CreateRoom__buttons__option"
            onClick={() => setPrice('$$$')}
            style={setSelectedStyle('$$$')}
          >
            $$$
          </div>
          <div
            className="CreateRoom__buttons__option"
            onClick={() => setPrice('$$$$')}
            style={setSelectedStyle('$$$$')}
          >
            $$$$
          </div>
        </div>
      </div>

      <Spacer space="25" />

      <div className="CreateRoom__friends">
        <div className="title">Number of Friends</div>
        <div className="CreateRoom__friends__number">
          <div
            className="CreateRoom__friends__number__decrement"
            onClick={onClickDecrement}
          >
            -
          </div>
          <span className="CreateRoom__friends__number__value">{capacity}</span>
          <div
            className="CreateRoom__friends__number__increment"
            onClick={onClickIncrement}
          >
            +
          </div>
        </div>
      </div>

      <Spacer space="110" />
      <Button text="Join" width="260px" height="50px" br="15px" bg="#b1afaf"
      onClick={() => {
          if (validateForm()) {
            makeRoom();
          }
      }}
      />
    </div>
  );

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
            setLat(latitude);
            setLong(longitude);
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

  function setSelectedStyle(target) {
    return (
      price === target ? {
        backgroundColor: '#404040',
        color: '#FFFFFF'
      } : {
        backgroundColor: '#EFEBEB',
        color: '#000000'
      }
    )
  }
}

export default CreateRoom;
