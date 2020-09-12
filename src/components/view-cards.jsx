import React from 'react';

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
    </div>
  );
}

function ViewCards(props) {
  return (
    <div>
      <h1 className="text-center">My Cards</h1>
      <div className="container mt-4">

        <div className="card-deck row-cols-md-3">
          {
            props.cards.map(card => {
              return (
                <Card key={card.question} card={card} />
              );
            })
          }
        </div>
      </div>

    </div>
  );
}

export default ViewCards;
