import './JoinRoom.css';

import React from 'react';
import InviteCodeInput from '../components/InviteCodeInput';
import RoomButton from '../components/RoomButton';
import Spacer from '../components/Spacer';
import { Link } from "react-router-dom";
import { join_post } from "../utils/api";
import { useHistory } from "react-router-dom";
import axios from "axios";

function JoinRoom() {
  const [curValue, setCurValue] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const history = useHistory();

  return (
    <div className="JoinRoom">
      <div className="JoinRoom__title">
        Enter Invite Code
      </div>
      <InviteCodeInput 
        value={curValue}
        handleValue={handleValue}
      /> 
      <Spacer space="75"/> 
      {errorMessage !== '' && (<div className="JoinRoom__error">{errorMessage}</div>)}
      <RoomButton
        onClick={async () => {
          const response = await join_post(curValue);
          const result = response.result;
          if(result){
            history.push(`/wait/${curValue}`);
            console.log("Valid code!")
          }
          else{
            setErrorMessage('Invalid RoomID!')
          }
        }}
        content="Join"
      />
    </div>
  );

  function handleValue(event) {
    setCurValue(event.target.value);
  }
}

export default JoinRoom;
