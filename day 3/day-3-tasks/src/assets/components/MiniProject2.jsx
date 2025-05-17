import React, { Component } from 'react';

class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <div className="counter-container">
          <h2 className="counter-title">Mini Project 2: Click Counter</h2>
          <p className="count-text">Count: {this.state.count}</p>
          <button className="counter-button" onClick={this.handleClick}>
            Click Me
          </button>
        </div>
        <hr className="line" />
      </>
    );
  }
}

export default ClickCounter;
