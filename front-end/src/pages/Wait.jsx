import './Wait.css';

import React from 'react';

const fake_users = [{name: "Jen"}, {name: "Tanya"}, {name: "Thomas"}];
const total = 6;

function Wait() {
  return (
    <div className="Wait">
      <h1>Waiting Room</h1>
      <p id="total">{fake_users.length}/{total} Participants</p>
      <div id="users">
        {fake_users.map( (user, i) =>  {
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
