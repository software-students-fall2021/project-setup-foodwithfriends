import './JoinRoom.css';

import React from 'react';
import InviteCodeInput from '../components/InviteCodeInput';
import Button from '../components/Button';

import Spacer from '../components/Spacer';
import { validateForm } from "../utils/validation"
import { useHistory } from "react-router-dom";
import { get } from '../utils/request';

function JoinRoom() {
  const [inviteCode, setInviteCode] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const history = useHistory();

  const joinGroup = async () => {
    const response = await get(
      '/room',
      {
        inviteCode
      }
    );

    if (response.valid) {
      history.push(`/new-user`);
    }
    else {
      console.log("invalid code! do something here");
      setErrorMessage(response.msg);
    }
  };

  return (
    <div className="JoinRoom">
      <div className="JoinRoom__title">
        Enter Invite Code
      </div>
      <InviteCodeInput 
        value={inviteCode}
        handleValue={(e) => {setErrorMessage(""); setInviteCode(e.target.value)}}
      /> 
      <Spacer space="75"/> 
      {errorMessage !== '' && (<div className="JoinRoom__error">{errorMessage}</div>)}
      <Button text="Join" width="260px" height="50px" br="15px" bg="#b1afaf" 
      onClick={() => {
        if (validateForm()) {
          joinGroup();
        }
      }}
      />
    </div>
  );
}

export default JoinRoom;
