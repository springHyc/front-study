import React, { useState, useEffect } from "react";

/**
 *
 * 首先，我们声明了一个状态变量count，将它的初始值设为0。然后我们告诉react，我们的这个组件有一个副作用。我们给useEffecthook传了一个匿名函数，这个匿名函数就是我们的副作用。在这个例子里，我们的副作用是调用browser API来修改文档标题。当react要渲染我们的组件时，它会先记住我们用到的副作用。等react更新了DOM之后，它再依次执行我们定义的副作用函数。
 * 这里要注意几点：
 * 第一，react首次渲染和之后的每次渲染都会调用一遍传给useEffect的函数。而之前我们要用两个声明周期函数来分别表示首次渲染（componentDidMount），和之后的更新导致的重新渲染（componentDidUpdate）。
 * 第二，useEffect中定义的副作用函数的执行不会阻碍浏览器更新视图，也就是说这些函数是异步执行的，而之前的componentDidMount或componentDidUpdate中的代码则是同步执行的。这种安排对大多数副作用说都是合理的，但有的情况除外，比如我们有时候需要先根据DOM计算出某个元素的尺寸再重新渲染，这时候我们希望这次重新渲染是同步发生的，也就是说它会在浏览器真的去绘制这个页面前发生。
 *
 * @export
 * @returns
 */
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
