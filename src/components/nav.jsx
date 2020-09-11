import React from 'react';

function Nav(props) {
  const view = props.view;
  return (
    <div className="d-flex justify-content-end">
      <div className="navbar col-4" >
        <a onClick={() => props.setView('view-cards')} className={`nav-item nav-link ${view === 'view-cards' ? 'active' : ''}`} href="#">View Cards</a>
        <a onClick={() => props.setView('review-cards')} className={`nav-item nav-link ${view === 'review-cards' ? 'active' : ''}`} href="#">Review</a>
        <a onClick={() => props.setView('create-card')} className={`nav-item nav-link ${view === 'create-card' ? 'active' : ''}`} href="#">Create Card</a>
      </div>
    </div>
  );
}

export default Nav;
