import "./CreateRoom.css";

import React from "react";
import { useHistory } from "react-router-dom";
import RoomButton from "../components/RoomButton";
import Spacer from "../components/Spacer";
import { post } from '../utils/request';

const MAX_CAPACITY = 20;
const MIN_CAPACITY = 0;

function CreateRoom() {
  const history = useHistory();
  const [name, setName] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [capacity, setCapacity] = React.useState(0);

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
        <div>Group Name</div>
        <input
          className="CreateRoom__group__input"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>

      <Spacer space="25" />

      <div className="CreateRoom__location">
        <div>Location</div>
        <div className="CreateRoom__container">
          <input
            className="CreateRoom__location__input"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          />
          <img
            className="CreateRoom__location__logo"
            src={process.env.PUBLIC_URL + "/location.png"}
            alt="location"
          />
        </div>
      </div>

      <Spacer space="25" />

      <div className="CreateRoom__friends">
        <div>Number of Friends</div>
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
          makeRoom();
        }}
        content="Continue"
      />
    </div>
  );

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
