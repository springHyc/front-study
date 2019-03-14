import React from "react";
export default class CounterD extends React.Component {
  state = {
    count: 0
  };

  componentDidMount() {
    document.title = `Count: ${this.state.count}`;
  }

  componentDidUpdate() {
    document.title = `Count: ${this.state.count}`;
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  minus = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h1>demo2(useEffect): </h1>
        <div
          style={{
            border: "1px solid #e2e2e2",
            padding: "10px",
            borderRadius: "10px",
            marginLeft: "20px"
          }}
        >
          <h1>{this.state.count}</h1>
          <button onClick={this.increment}>+</button>
          <button onClick={this.minus}>-</button>
        </div>
      </div>
    );
  }
}
