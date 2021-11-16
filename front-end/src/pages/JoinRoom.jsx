import './JoinRoom.css';

import React from 'react';
import InviteCodeInput from '../components/InviteCodeInput';
import Button from '../components/Button';

import Spacer from '../components/Spacer';
import { join_post } from "../utils/api";
import { useHistory } from "react-router-dom";

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
      <Button text="Join" width="260px" height="50px" br="15px" bg="#b1afaf" 
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
        }}/>
    </div>
  );

  function handleValue(event) {
    setCurValue(event.target.value);
  }
}

export default JoinRoom;
