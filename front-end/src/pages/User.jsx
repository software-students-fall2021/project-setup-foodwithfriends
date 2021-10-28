import './User.css';
import Input from '../components/Input';

import React from 'react';

function User(props) {
  return (
    <div className="User">
      <Input labelFor="name" label="Enter your name" inputName="userName"/>
      <button type="button"> Continue </button>
    </div>
  );
};

export default User;