import React from 'react';
import ViewCards from './view-cards';
import ReviewCards from './review-cards';
import CreateCard from './create-card';
import Nav from './nav';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'view-cards',
      cards: []
    };
    this.setView = this.setView.bind(this);
    this.getView = this.getView.bind(this);
    this.saveCards = this.saveCards.bind(this);
    this.addCard = this.addCard.bind(this);
  }

  componentDidMount() {
    let cards = JSON.parse(localStorage.getItem('flash-cards'));
    if (cards === null) {
      cards = [];
    }
    this.setState({ cards: cards });
  }

  addCard(newCard) {
    const newCards = this.state.cards.slice();
    newCards.push(newCard);
    this.setState({ cards: newCards }, () => { this.saveCards(); });
  }

  saveCards() {
    const cards = this.state.cards.slice();
    localStorage.setItem('flash-cards', JSON.stringify(cards));
  }

  setView(newView) {
    this.setState({ view: newView });
  }

  getView() {
    const cards = this.state.cards.slice();
    switch (this.state.view) {
      case 'create-card':
        return <CreateCard setView={this.setView} addCard={this.addCard} />;
      case 'review-cards':
        return <ReviewCards />;
      case 'view-cards':
        return <ViewCards cards={cards} />;
      default:
        return null;
      }
  }

  render() {
    return (
      <div>
        <Nav view={this.state.view} setView={this.setView} />
        { this.getView() }
      </div>
    );
  }
}

export default App;
