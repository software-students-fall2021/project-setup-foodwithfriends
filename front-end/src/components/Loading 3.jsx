import './Loading.css';
import React from 'react';
import Spinner from 'react-spinner-material';

function Loading() {
  let [color,] = React.useState("#333");
  return (
    <div className="Loading">
      <Spinner radius={30} color={color} stroke={2} visible={true} />
    </div>
  );
}

export default Loading;
