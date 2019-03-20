import React, { useState } from "react";

let showFruit = true;
let fruit, setFruit;
/**
 * 当showFruit的值改变后，就缺少一个钩子，聚就会报错
 *
 * Uncaught Invariant Violation: Rendered fewer hooks than expected.
 * This may be caused by an accidental early return statement.
 * @export
 * @returns
 */
export default function CounterHooksError() {
  const [count, setCount] = useState(0);

  if (showFruit) {
    [fruit, setFruit] = useState("banana");
    showFruit = false;
  }

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <h1>demo3(条件渲染): </h1>
      <div
        style={{
          border: "1px solid #e2e2e2",
          padding: "10px",
          borderRadius: "10px",
          marginLeft: "20px"
        }}
      >
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <h3>条件渲染：`fruit=${fruit}`</h3>
      </div>
    </div>
  );
}
