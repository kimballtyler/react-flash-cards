import React from 'react';
import ViewCards from './view-cards';
import ReviewCards from './review-cards';
import CreateCard from './create-card';
import Nav from './nav';
import UpdateCard from './update-card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'view-cards',
      cards: [],
      activeCard: 0,
      modalOpen: false
    };
    this.setView = this.setView.bind(this);
    this.getView = this.getView.bind(this);
    this.saveCards = this.saveCards.bind(this);
    this.addCard = this.addCard.bind(this);
    this.setActiveCard = this.setActiveCard.bind(this);
    this.modalToggle = this.modalToggle.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.updateCard = this.updateCard.bind(this);
  }

  componentDidMount() {
    let cards = JSON.parse(localStorage.getItem('flash-cards'));
    if (cards === null) {
      cards = [];
    }
    this.setState({ cards: cards });
  }

  deleteCard(index) {
    const newCards = this.state.cards.slice();
    newCards.splice(index, 1);
    this.setState({
      cards: newCards,
      activeCard: 0,
      modalOpen: false
    },
    () => this.saveCards());
  }

  modalToggle(index) {
    this.setState({ modalOpen: !this.state.modalOpen });
    this.setState({ activeCard: index });
  }

  setActiveCard(index) {
    this.setState({ activeCard: index });
  }

  addCard(newCard) {
    const newCards = this.state.cards.slice();
    newCards.push(newCard);
    this.setState({ cards: newCards }, () => this.saveCards());
  }

  updateCard(newCard) {
    const newCards = this.state.cards.slice();
    newCards[this.state.activeCard] = newCard;
    this.setState({ cards: newCards }, () => this.saveCards());
  }

  saveCards() {
    const cards = this.state.cards.slice();
    localStorage.setItem('flash-cards', JSON.stringify(cards));
  }

  setView(newView) {
    this.setState({ view: newView });
  }

  getView() {
    switch (this.state.view) {
      case 'create-card':
        return <CreateCard setView={this.setView} addCard={this.addCard} />;
      case 'review-cards':
        return <ReviewCards cards={this.state.cards} setActiveCard={this.setActiveCard} activeCard={this.state.activeCard} />;
      case 'view-cards':
        return <ViewCards setActiveCard={this.setActiveCard} setView={this.setView} deleteCard={this.deleteCard} activeCard={this.state.activeCard} modalToggle={this.modalToggle} modalOpen={this.state.modalOpen} cards={this.state.cards} />;
      case 'update-card':
        return <UpdateCard updateCard={this.updateCard} setView={this.setView} card={this.state.cards[this.state.activeCard]} />;
      default:
        return null;
    }
  }

  render() {
    return (
      <div>
        <Nav view={this.state.view} setView={this.setView} />
        {this.getView()}
      </div>
    );
  }
}

export default App;
