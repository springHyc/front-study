import React from "react";
import Counter from "./Counter";
import CounterHooks from "./CounterHooks";

import CounterD from "./CounterD";
import CounterHooksD from "./CounterHooksD";
import CounterHooksError from "./CounterHooksError";

import FormCustomHooks from "./FormCustomHooks";
import "./index.css";

function HooksDemo() {
  return (
    <div className="hooks-demo">
      <div className="without-hooks">
        <span>without-hooks</span>
        <Counter />
        <CounterD />
      </div>
      <div className="with-hooks">
        <span>with-hooks</span>
        <CounterHooks />
        <CounterHooksD />
        <CounterHooksError />
      </div>
      <div className="custom-hooks">
        <FormCustomHooks />
      </div>
    </div>
  );
}

export default HooksDemo;
