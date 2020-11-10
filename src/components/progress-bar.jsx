import React from 'react';

function ProgressBar(props) {
  return (
    <div className="progress col-9 mt-3" style={{ height: '10px' }}>
      <div className="progress-bar" style={{ width: `${props.complete}%` }}></div>
    </div>
  );
}

export default ProgressBar;
