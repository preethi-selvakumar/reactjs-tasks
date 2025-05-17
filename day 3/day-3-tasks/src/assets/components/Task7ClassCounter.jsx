import React, { Component } from "react";

class Task7ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div className="container">
        7. Counter Value: {this.state.counter}
        <hr className="line" />
      </div>
    );
  }
}

export default Task7ClassCounter;
