import './Spacer.css';

import React from 'react';

function Spacer({ space }) {
  return (
    <div className="Spacer" style={{ height: space + 'px'}}>
    </div>
  );
}

export default Spacer;
