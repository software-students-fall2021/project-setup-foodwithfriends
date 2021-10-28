import './InviteCodeInput.css';

import React from 'react';

function InviteCodeInput({ disabled = false, value }) {
  const [curValue, setCurValue] = React.useState('');
  console.log(disabled);

  return (
    <input
      className="InviteCodeInput"
      type="text"
      name="name"
      placeholder="code"
      value={value || curValue}
      onChange={handleValue}
      disabled={!!disabled}
      style={{ backgroundColor: !!disabled ? '#C4C4C4' : '#EFEBEB' }}
    />
  );

  function handleValue(event) {
    setCurValue(event.target.value);
  }
};

export default InviteCodeInput;
