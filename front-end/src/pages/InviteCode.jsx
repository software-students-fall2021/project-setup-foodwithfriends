import "./InviteCode.css";
import React from "react";
import InviteCodeInput from "../components/InviteCodeInput";
import RoomButton from "../components/RoomButton";
import Spacer from "../components/Spacer";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios"

function InviteCode() {
  const history = useHistory();
  const inviteCode = getInviteCode();

  return (
    <div className="InviteCode">
      <div id ="copy-msg">
        <span>✨ Copied to Clipboard ✨</span> 
      </div>
      <div className="InviteCode__title">Your Invite Code</div>
      <div className="InviteCode__invite">
        <InviteCodeInput disabled value={inviteCode} />
          <button
            className="InviteCode__invite__button"
            onClick={() => {
              navigator.clipboard.writeText(getInviteCode());
              successMessage();
            }}
          >
            Copy
          </button>
      </div>
      <Spacer space="75" />
      <Link to="/new-user" className="InviteCode__button">
        <RoomButton
          content="Continue"
        />
      </Link>
    </div>
  );

  function getInviteCode() {
    const roomId = history?.location?.state?.roomId;
    return roomId || "N/A";
  }

  function successMessage() {
    let copyMsg = document.getElementById("copy-msg");
    copyMsg.style.display = "inline";
    setTimeout( function() {
      copyMsg.style.display = "none";
    }, 2500);
  }
}

export default InviteCode;
