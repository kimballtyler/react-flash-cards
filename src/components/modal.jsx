import React from 'react';

function Modal(props) {
  const question = props.cards.length === 0 ? '' : props.cards[props.activeCard].question;
  const answer = props.cards.length === 0 ? '' : props.cards[props.activeCard].answer;
  return (
    <div onClick={props.modalToggle} className="modal-overlay">
      <div onClick={e => e.stopPropagation()} className="modal-content">
        <h5 className="text-center font-weight-bold modal-title">Are you sure you want to delete this card?</h5>
        <p className="text-center"><strong>Q:</strong>{` ${question}`}</p>
        <p className="text-center"><strong>A:</strong>{` ${answer}`}</p>
        <div className="d-flex justify-content-end modal-buttons">
          <button onClick={props.modalToggle} className="btn btn-outline-danger modal-cancel">Cancel</button>
          <button onClick={() => props.deleteCard(props.activeCard)} className="btn btn-outline-success">Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
