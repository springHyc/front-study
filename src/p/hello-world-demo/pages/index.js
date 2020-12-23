import React, { Component } from "react";
import logo from "./logo.svg";
import "./index.css";
import Clock from "./Clock";
import Grandparent from "./Grandparent";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Hello(props) {
  return (
    <div style={{ backgroundColor: "#def345" }}>
      <span>
        Hello, {props.name}, it is {props.date.toLocaleTimeString()}
        xxxxyyy
      </span>
    </div>
  );
}

const TestComponents = { Clock, Hello };

export default class HelloWorldDemo extends Component {
  constructor() {
    super();
    this.state = {
      val: 0,
    };
  }

  componentDidMount() {
    this.setState({ val: this.state.val + 1 }, () => {
      console.log("A ", this.state.val);
    });
    console.log("B ", this.state.val);
    setTimeout(() => {
      console.log("C ", this.state.val);
      this.setState({ val: this.state.val + 1 }, () => {
        console.log("D ", this.state.val);
      });
      setTimeout(() => {
        console.log("E ", this.state.val);
      }, 0);
      console.log("F ", this.state.val);
    }, 0);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TestComponents.Clock date={new Date()} />
        {1 && <TestComponents.Hello name="Jasper" date={new Date()} />}
        <Grandparent />
        <h2>复制内容</h2>
        <CopyToClipboard text="Hello!">
          <button>Copy to clipboard</button>
        </CopyToClipboard>
      </div>
    );
  }
}
