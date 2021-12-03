import './Wait.css';

import { get } from '../utils/request';

import React from 'react';


function Wait() {
  const [users, setUsers] = React.useState("")
  const [userTotal, setUserTotal] = React.useState("?")
  const [groupId, setName] = React.useState("b6034"); //THIS IS TEMPORARY JUST FOR NOW
  const [friends, setFriends] = React.useState([])
  const checkUser = async () => {
    const users = await get(
      '/wait',
      {
        groupId: groupId
      });
      return users;
  };

	React.useEffect(() => {
    function initCheck() {
      checkUser().then((response) => {
        setUsers(response.num_users);
        setUserTotal(response.tot_users);
        setFriends(response.friends);
        if (response.num_users == response.tot_users) {
          window.location.href = "/win";
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
      <p id="total">{users}/{userTotal} Participants</p>
      <div id="users">
        {friends.map( (user, i) =>  {
          const initial = user.name.charAt(0);
          return <div className="user-item" key={i}>
            <span className="icon"> <span className="initial">{initial}</span> </span>
            <p>{user.name}</p>
          </div>;
        })}
      </div>
    </div>
  );
}

export default Wait;
