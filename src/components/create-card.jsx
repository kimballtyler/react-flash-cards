import React from 'react';

class CreateCard extends React.Component {
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

  handleReset() {
    this.setState({
      question: '',
      answer: ''
    });
    this.props.setView('view-cards');
  }

  handleChange(event) {
    if (event.target.name === 'question') {
      this.setState({
        question: event.target.value
      });
    } else {
      this.setState({
        answer: event.target.value
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const newCard = {
      question: this.state.question,
      answer: this.state.answer
    };
    this.props.addCard(newCard);
    this.setState({
      question: '',
      answer: ''
    });
    this.handleReset();
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Create New Card</h1>
        <form onSubmit={this.handleSubmit} className="text-center">
          <div className="label">
            <label>Question:</label>
          </div>
          <div>
            <textarea name="question" value={this.state.question} onChange={this.handleChange}></textarea>
          </div>

          <div className="label">
            <label>Answer:</label>
          </div>
          <div>
            <textarea name="answer" value={this.state.answer} onChange={this.handleChange}></textarea>
          </div>
          <div className="create-buttons">
            <button type="submit" onClick={this.handleReset} className="create-button btn btn-outline-danger">Cancel</button>
            <button onClick={this.handleSubmit} className="create-button btn btn-outline-primary">Save Card</button>
          </div>
        </form>
      </div>

    );
  }
}

export default CreateCard;
