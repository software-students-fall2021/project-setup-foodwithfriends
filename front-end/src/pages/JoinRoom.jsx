import './JoinRoom.css';

import React from 'react';
import InviteCodeInput from '../components/InviteCodeInput';
import Button from '../components/Button';

import Spacer from '../components/Spacer';
import { validateForm } from "../utils/validation"
import { useHistory } from "react-router-dom";
import { get } from '../utils/request';
import { Redirect } from 'react-router';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

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
      cookies.set("groupID", inviteCode, { expires: 0 });
      cookies.set("groupName", response.groupname, { expires: 0 });
      history.push(`/new-user`);
    }
    else {
      setErrorMessage(response.msg);
    }
  };

  if (cookies.get("groupID")) {
    return (
      <Redirect to={{
        pathname: "/error",
        state: { error: "group", group: cookies.get("groupName"), next: "/join" }
      }}
      />)
  }

  return (
    <div className="JoinRoom">
      <div className="JoinRoom__title">
        Enter Invite Code
      </div>
      <InviteCodeInput
        value={inviteCode}
        handleValue={(e) => { setErrorMessage(""); setInviteCode(e.target.value) }}
      />
      <Spacer space="75" />
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
