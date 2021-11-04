import './User.css';
import Input from '../components/Input';
import { Link } from "react-router-dom";

import React from 'react';

function User() {
  return (
    <div className="User">
      <Input labelFor="name" label="Enter your name" inputName="userName"/>
      <Link to="/wait">
        <button type="button"> Continue </button>
      </Link>
    </div>
  );
}

export default User;