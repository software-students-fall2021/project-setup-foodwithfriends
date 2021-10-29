import './JoinRoom.css';

import React from 'react';
import InviteCodeInput from '../components/InviteCodeInput';
import RoomButton from '../components/RoomButton';
import Spacer from '../components/Spacer';
import { Link } from "react-router-dom";

function JoinRoom() {
  return (
    <div className="JoinRoom">
      <div className="JoinRoom__title">
        Enter Invite Code
      </div>
      <InviteCodeInput />
      <Spacer space="75"/>
      <Link to="/user" className="JoinRoom__button">
        <RoomButton
          content="Join"
        />
      </Link>
    </div>
  );
}

export default JoinRoom;
