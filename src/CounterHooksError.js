import React, { useState } from "react";

export default function CounterHooksError() {
  const [count, setCount] = useState(0);
  let foo, bar, updateFoo, updateBar;
  if (count % 2 === 0) {
    let [foo, updateFoo] = useState("foo");
  } else {
    let [bar, updateBar] = useState("bar");
  }
  const increment = () => {
    setCount(count + 1);
    debugger;
    if (count % 2 === 0) {
      updateFoo("updateFoo");
    }
  };
  const minus = () => {
    setCount(count - 1);
    debugger;
    if (count % 2 === 0) {
      updateFoo("updateFoo");
    }
  };
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <h1>demo1(useState): </h1>
      <div
        style={{
          border: "1px solid #e2e2e2",
          padding: "10px",
          borderRadius: "10px",
          marginLeft: "20px"
        }}
      >
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={minus}>-</button>
        <h4>foo:{foo}</h4>
        <h4>bar:{bar}</h4>
      </div>
    </div>
  );
}
