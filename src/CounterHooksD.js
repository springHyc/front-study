import React, { useState, useEffect } from "react";

export default function CounterHooksD() {
  const [count, setCount] = useState(0);

  // 添加了后可能会问，现在把 componentDidMount 和 componentDidUpdate 混在了一起，
  //那假如某个场景下我只在 mount 时做事但 update 不做事，用 useEffect 不就不行了吗？
  // 其实，用一点小技巧就可以解决。useEffect 还支持第二个可选参数，只有同一 useEffect 的两次调用第二个参数不同时，
  // 第一个函数参数才会被调用.
  useEffect(
    () => {
      document.title = `Count(useEffect): ${count}`;
    }
    // [123]
  );

  const increment = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };
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
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={minus}>-</button>
      </div>
    </div>
  );
}
