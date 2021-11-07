import "./CreateRoom.css";

import React from "react";
import { useHistory } from "react-router-dom";
import RoomButton from "../components/RoomButton";
import Spacer from "../components/Spacer";
import { room_post } from "../utils/api";

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
            className="CreateRoom__location__input"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          />
          <div className="tooltip">
            <img
              className="CreateRoom__location__logo"
              src={process.env.PUBLIC_URL + "/location.png"}
              alt="location"
              onClick= {()=> {console.log("get the current location!")}}
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
            onClick={onClickInclement}
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

  function onClickInclement() {
    if (capacity >= MAX_CAPACITY) return;
    setCapacity(capacity + 1);
  }

  function onClickDecrement() {
    if (capacity <= MIN_CAPACITY) return;
    setCapacity(capacity - 1);
  }
}

export default CreateRoom;
