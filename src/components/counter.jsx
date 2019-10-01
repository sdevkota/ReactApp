import React, { Component } from "react";
class Counter extends Component {
  state = { count: 0 };
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <React.Fragment>
        <h1>{this.state.count}</h1>
        <button onClick={this.decrement}>
          Click here to decrease the number by 1
        </button>
        <br />
        <button onClick={this.increment}>
          Click here to increase the number by 1
        </button>
      </React.Fragment>
    );
  }
}

export default Counter;
