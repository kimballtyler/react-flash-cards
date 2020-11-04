import React from 'react';

class ReviewCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideDisplayed: 'question'
    };
    this.nextCard = this.nextCard.bind(this);
    this.previousCard = this.previousCard.bind(this);
    this.flipCard = this.flipCard.bind(this);
  }

  componentDidMount() {
    this.props.setActiveCard(0);
    this.setState({ sideDisplayed: 'question' });
  }

  nextCard() {
    const resetNum = this.props.cards.length - 1;
    if (resetNum === this.props.activeCard) {
      this.props.setActiveCard(0);
    } else {
      this.props.setActiveCard(this.props.activeCard + 1);
    }
    this.setState({ sideDisplayed: 'question' });
  }

  previousCard() {
    const resetNum = 0;
    if (resetNum === this.props.activeCard) {
      this.props.setActiveCard(this.props.cards.length - 1);
    } else {
      this.props.setActiveCard(this.props.activeCard - 1);
    }
    this.setState({ sideDisplayed: 'question' });
  }

  flipCard() {
    if (this.state.sideDisplayed === 'question') {
      this.setState({ sideDisplayed: 'answer' });
    } else {
      this.setState({ sideDisplayed: 'question' });
    }
  }

  render() {
    const activeCard = this.props.activeCard;
    const cards = this.props.cards;
    const side = this.state.sideDisplayed;
    let sideColor = '';
    if (this.state.sideDisplayed === 'question') {
      sideColor = 'bg-dark';
    } else {
      sideColor = 'bg-secondary';
    }
    if (cards.length === 0) {
      return <h1 className="text-center">Review</h1>;
    }
    return (
      <div className="">
        <h1 className="text-center">Review</h1>
        <div className="d-flex align-items-center justify-content-center mt-4">
          <div onClick={this.flipCard} className={`${sideColor} col-9 review-card text-white d-flex align-items-center justify-content-center font-weight-bold`}>
            <p className="review-text text-center">{cards[activeCard][side]}</p>
          </div>
          <i onClick={this.nextCard} className="fa fa-angle-right fa-5x text-white review-right"></i>
          <i onClick={this.previousCard} className="fa fa-angle-left fa-5x review-left text-white"></i>
        </div>
      </div>
    );
  }
}

export default ReviewCards;
