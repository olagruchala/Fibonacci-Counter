import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class FibonacciCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialN: this.props.initialN
    };

    this.fib = this.fib.bind(this);
    this.resetN = this.resetN.bind(this);
    this.increaseN = this.increaseN.bind(this);
    this.decreaseN = this.decreaseN.bind(this);
  }

  // 0 	1 	1 	2 	3 	5 	8 	13 	21 	34 	55 	89
  fib(n) {
    let a = 0;
    let b = 1;
    let arrOfFibs = [a, b];
    for (let i = 2; i < n + 1; i++) {
      let result = a + b;
      arrOfFibs.push(result);
      a = b;
      b = result;
    }
    return arrOfFibs[n];
  }

  resetN() {
    this.setState({
      initialN: this.props.initialN
    });
  }

  increaseN() {
    this.setState(prevState => {
      return { initialN: prevState.initialN + 1 };
    });
  }

  decreaseN() {
    this.setState(prevState => {
      return { initialN: prevState.initialN - 1 };
    });
  }

  render() {
    return (
      <div>
        <h1>Fibonacci Counter</h1>
        <h2>
          fib({this.state.initialN}) = {this.fib(this.state.initialN)}
        </h2>
        <button onClick={this.increaseN}>+</button>
        <button onClick={this.decreaseN}>-</button>
        <button onClick={this.resetN}>reset</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<FibonacciCounter initialN={2} />, rootElement);
