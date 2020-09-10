import React from 'react';

function Nav(props) {
  let viewActive = '';
  let reviewActive = '';
  let createActive = '';
  switch (props.view) {
    case 'create-card':
      createActive = 'active';
      break;
    case 'review-cards':
      reviewActive = 'active';
      break;
    case 'view-cards':
      viewActive = 'active';
      break;
  }
  return (
    <div className="d-flex justify-content-end">
      <div className="navbar col-4" >
        <a onClick={() => props.setView('view-cards')} className={`nav-item nav-link ${viewActive}`} href="#">View Cards</a>
        <a onClick={() => props.setView('review-cards')} className={`nav-item nav-link ${reviewActive}`} href="#">Review</a>
        <a onClick={() => props.setView('create-card')} className={`nav-item nav-link ${createActive}`} href="#">Create Card</a>
      </div>
    </div>
  );
}

export default Nav;
