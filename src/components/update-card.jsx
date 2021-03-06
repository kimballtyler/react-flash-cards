import React from 'react';

class UpdateCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidMount() {
    this.setState({
      question: this.props.card.question,
      answer: this.props.card.answer
    });
  }

  handleReset() {
    this.setState({
      question: '',
      answer: ''
    });
    this.props.setView('view-cards');
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newCard = {
      question: this.state.question,
      answer: this.state.answer
    };
    this.props.updateCard(newCard);
    this.handleReset();
  }

  render() {
    return (
      <div>
        <h1 className="create-heading text-center">Update Card</h1>
        <form onSubmit={this.handleSubmit} className="text-center">
          <div className="label create-label">
            <label>Question:</label>
          </div>
          <div>
            <textarea className="create-ta" name="question" value={this.state.question} onChange={this.handleChange}></textarea>
          </div>

          <div className="label create-label">
            <label>Answer:</label>
          </div>
          <div>
            <textarea className="create-ta" name="answer" value={this.state.answer} onChange={this.handleChange}></textarea>
          </div>
          <div className="create-buttons">
            <button type="button" onClick={this.handleReset} className="create-button btn btn-outline-danger">Cancel</button>
            <button onClick={this.handleSubmit} className="create-button btn btn-outline-primary">Save Card</button>
          </div>
        </form>
      </div>
    );
  }
}

export default UpdateCard;
