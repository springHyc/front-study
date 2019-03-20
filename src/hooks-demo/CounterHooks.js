import React, { useState } from "react";

export default function CounterHooks() {
  const [count, setCount] = useState(0);
  // const [theCount, updateCount] = useState(0); // 命名都是随意的
  const increment = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
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
      </div>
    </div>
  );
}
