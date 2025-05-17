import React, { Component } from 'react';

class Task13LifecycleComponent extends Component {
  componentDidMount() {
    console.log('13. Component has been mounted.');
  }

  render() {
    return (
      <div className="container">
        <p>13. Check the console to see the lifecycle message.</p>
        <hr className="line" />
      </div>
    );
  }
}

export default Task13LifecycleComponent;
