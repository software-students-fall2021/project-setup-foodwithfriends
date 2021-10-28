import './InviteCode.css';

import React from 'react';
import InviteCodeInput from '../components/InviteCodeInput';
import RoomButton from '../components/RoomButton';
import Spacer from '../components/Spacer';
import { Link } from "react-router-dom";

function InviteCode(props) {
  const inviteCode = generateInviteCode();

  return (
    <div className="InviteCode">
      <div className="InviteCode__title">
        Your Invite Code
      </div>
      <div className="InviteCode__invite">
        <InviteCodeInput
          disabled
          value={inviteCode}
        />
        <button className="InviteCode__invite__button">Copy</button>
      </div>
      <Spacer space="75"/>
      <Link to="/user" className="InviteCode__button">
        <RoomButton
          content="Continue"
        />
      </Link>
    </div>
  );

  function generateInviteCode() {
    return 'ABCDE';
  }
};

export default InviteCode;
