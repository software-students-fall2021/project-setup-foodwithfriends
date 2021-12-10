import "./Wait.css";
import { get } from "../utils/request";
import React from "react";
import Cookies from "universal-cookie";
import { Redirect } from "react-router-dom";
const cookies = new Cookies();

function Wait() {
  const [users, setUsers] = React.useState("");
  const [userTotal, setUserTotal] = React.useState("?");
  const [groupId] = React.useState(cookies.get("groupID")); 
  const [friends, setFriends] = React.useState([]);

  if (!cookies.get("groupID")) {
    return (
      <Redirect
        to={{
          pathname: "/error",
          state: { error: "nogroup" },
        }}
      />
    );
  }

  if (!cookies.get("user")) {
    return (
      <Redirect
        to={{
          pathname: "/error",
          state: { error: "nouser" },
        }}
      />
    );
  }

  const checkUser = async () => {
    const users = await get("/wait", {
      groupId: groupId,
    });
    return users;
  };

  React.useEffect(() => {
    function initCheck() {
      checkUser().then((response) => {
        setUsers(response.num_users);
        setUserTotal(response.tot_users);
        setFriends(response.friends);
        if (response.num_users >= response.tot_users) {
          window.location.href = "/cuisine";
        }
      });
    }
    initCheck();
    setInterval(initCheck, 10000);
    return () => clearInterval(initCheck);
  }, []);

  return (
    <div className="Wait">
      <h1>Waiting Room</h1>
      <p id="total">
        {users}/{userTotal} Participants
      </p>
      <div id="users">
        {friends.map((user, i) => {
          const initial = user.name.charAt(0);
          return (
            <div className="user-item" key={i}>
              <span className="icon">
                {" "}
                <span className="initial">{initial}</span>{" "}
              </span>
              <p>{user.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Wait;
