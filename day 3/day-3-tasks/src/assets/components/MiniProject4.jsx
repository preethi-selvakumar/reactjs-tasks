import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { currentTime: new Date().toLocaleTimeString() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({ currentTime: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div className="container">
        <h2 className="timer-title">Mini Project 4: Class Component Timer</h2>
        <p className="time-display">{this.state.currentTime}</p>
        <hr className="line" />
      </div>
    );
  }
}

export default Timer;
