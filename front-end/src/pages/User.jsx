import './User.css';
import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { post } from '../utils/request';
import { useHistory } from "react-router-dom";
import { Redirect } from 'react-router';
import { validateForm } from "../utils/validation"

import Cookies from 'universal-cookie';
const cookies = new Cookies();

function User() {
  const [userName, setName] = React.useState("");
  const [groupID] = React.useState(cookies.get("groupID"));

  const history = useHistory();

  const makeUser = async () => {
    const response = await post(
      '/user',
      {
        userName,
        groupID
      }
    );

    if (response.success) {
      console.log(response.userID);
      cookies.set("userID", response.userID, { expires: 0});
      cookies.set("user", userName, { expires: 0 });
      history.push(`/wait`);
    }
    else {
      history.push(`/error`);
    }
  };

  if (!cookies.get("groupID")) {
    return (
    <Redirect to={{
      pathname: "/error",
      state: { error: "nogroup" }
    }}
    />)
  }

  if (cookies.get("user")) {
    return (
    <Redirect to={{
      pathname: "/error",
      state: { error: "user", user: cookies.get("user") }
    }}
    />)
  }

  return (
    <div className="User">
      <Input labelFor="name" label="Enter your name" inputName="userName" onChange={(e) => setName(e.target.value)} value={userName}/>
      <Button text="Continue" width="250px" height="40px" onClick={() => {
          if (validateForm()) {
            makeUser();
          }
      }}/>
    </div>
  );
}

export default User;