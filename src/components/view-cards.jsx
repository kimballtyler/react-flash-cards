import React from 'react';
import Modal from './modal';

function Card(props) {
  const card = props.card;

  return (
    <div className="col card-col">
      <div className="pl-3 pt-2 h-75 w-100 card text-white bg-dark">
        <h5 className="card-title text-muted">Question:</h5>
        <p className="card-text">{card.question}</p>
      </div>
      <div className="pl-3 pt-2 h-75 w-100 card text-white bg-secondary">
        <h5 className="card-title text-dark">Answer:</h5>
        <p className="card-text">{card.answer}</p>
      </div>
      <div className="card h-25 bg-dark w-100 text-center">
        <i onClick={() => { props.setView('update-card'); props.setActiveCard(props.index); }} className="fas fa-edit text-secondary edit"></i>
        <i onClick={() => props.modalToggle(props.index)} className="fas fa-trash-alt trash text-secondary"></i>
      </div>
    </div>
  );
}
function ViewCards(props) {
  let modal = null;
  if (props.modalOpen) {
    modal = <Modal deleteCard={props.deleteCard} activeCard={props.activeCard} cards={props.cards} modalToggle={props.modalToggle} />;
  }
  return (
    <div>
      {modal}
      <h1 className="text-center">My Cards</h1>
      <div className="container mt-4">
        <div className="card-deck row-cols-md-3">
          {
            props.cards.map((card, index) => {
              return (
                <Card setActiveCard={props.setActiveCard} setView={props.setView} modalToggle={props.modalToggle} index={index} key={card.question} card={card} />
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default ViewCards;
