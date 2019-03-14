import React from "react";
import Counter from "./Counter";
import CounterHooks from "./CounterHooks";

import CounterD from "./CounterD";
import CounterHooksD from "./CounterHooksD";
import CounterHooksError from "./CounterHooksError";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="without-hooks">
        <span>without-hooks</span>
        <Counter />
        <CounterD />
      </div>
      <div className="with-hooks">
        <span>with-hooks</span>
        <CounterHooks />
        <CounterHooksD />
        {/* <CounterHooksError /> */}
      </div>
    </div>
  );
}

export default App;
