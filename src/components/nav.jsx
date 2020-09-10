import React from 'react';

function Nav(props) {
  return (
    <div className="d-flex justify-content-end">
      <div className="navbar col-4" >
        <a onClick={() => props.setView('view-cards')} className="nav-item nav-link active" href="#">View Cards</a>
        <a onClick={() => props.setView('review-cards')} className="nav-item nav-link" href="#">Review</a>
        <a onClick={() => props.setView('create-card')} className="nav-item nav-link" href="#">Create Card</a>
      </div>
    </div>
  );
}

export default Nav;
