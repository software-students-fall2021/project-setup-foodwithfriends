import './InviteCodeInput.css';
import React from 'react';

function InviteCodeInput({ disabled = false, value, handleValue }) {
  return (
    <input
      className="InviteCodeInput"
      type="text"
      name="name"
      placeholder="code"
      value={value}
      onChange={handleValue}
      disabled={!!disabled}
      style={{ backgroundColor: disabled ? '#C4C4C4' : '#EFEBEB' }}
    />
  );
}

export default InviteCodeInput;
