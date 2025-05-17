import React, { Component } from "react";

class Task8CounterWithButton extends Component {
  state = { counter: 0 };

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div className="container">
        8. Counter: {this.state.counter}
         <button
          onClick={this.increment}
          style={{
            padding: '10px 20px',
            fontSize: '1rem',
            cursor: 'pointer',
            border: 'none',
            backgroundColor: '#007bff',
            color: 'white',
            borderRadius: '5px',
            marginLeft: '20px'
          }}
        >
          +
        </button>
        <hr className="line" />
      </div>
    );
  }
}

export default Task8CounterWithButton;
