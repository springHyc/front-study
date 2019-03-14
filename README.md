## 生命周期

现在流行的前端框架，无论是 angular 还是 React，又或是 Angular2 以及以上，都由框架自身提供了生命周期（有的叫生命周期钩子）供开发者使用。

下面我们看下上面几个框架的生命周期：

Vue 生命周期:
![Vue-lifecycle](https://upload-images.jianshu.io/upload_images/2041009-37526705b33a353d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

Angular 生命周期:
| Hook | Purpose and Timing |
---| ---
| `ngOnChanges()` | Angular（重新）设置数据绑定输入属性时的响应。该方法接收`[SimpleChanges](https://angular.io/api/core/SimpleChanges)`当前和先前属性值的对象。`ngOnInit()`在一个或多个数据绑定输入属性发生更改   之前和之后调用。|
| `ngOnInit()` | 在 Angular 首次显示数据绑定属性并设置指令/组件的输入属性后初始化指令/组件。在第一次之后 调用一次。 ngOnChanges()|
| `ngDoCheck()` | 检测 Angular 无法或不会自行检测的更改并对其进行操作。在每次更改检测运行期间，在 ngOnChanges()和之后立即调用 ngOnInit()。 |
| `[ngAfterContentInit()]` | 在 Angular 将外部内容投影到组件的视图/指令所在的视图后进行响应。在第一次之后 调用一次 ngDoCheck()。|
| `ngAfterContentChecked()` | 在 Angular 检查投射到指令/组件中的内容后响应。在`[ngAfterContentInit()](https://angular.io/api/router/RouterLinkActive#ngAfterContentInit)`随后和随后的每一次调用之后`ngDoCheck()`。|
| `[ngAfterViewInit()]` | 在 Angular 初始化组件的视图和子视图/指令所在的视图后响应。在第一次之后 调用一次 ngAfterContentChecked()。|
| `ngAfterViewChecked()` | 在 Angular 检查组件的视图和子视图/指令所在的视图后响应。在`[ngAfterViewInit()]`随后和随后的每一次调用之后`ngAfterContentChecked()`。|
| `ngOnDestroy()` | 就在 Angular 破坏指令/组件之前进行清理。取消订阅 Observable 并分离事件处理程序以避免内存泄漏。在 Angular 破坏指令/组件之前 调用。|

React 生命周期（16.0 之前）：
![React-Lifecycle1](https://upload-images.jianshu.io/upload_images/2041009-8194a8dee1922c66.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![React-Lifecycle2](https://upload-images.jianshu.io/upload_images/2041009-904a35dd49de5aad.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

React 生命周期（16.0 后）：

![React-Lifecycle3](https://upload-images.jianshu.io/upload_images/2041009-ae6e23d14d1cb742.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

我们下面看一个例子，React 代码中是如何使用生命周期的。

```js
class Demo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.fetchList();
  }

  fetchList() {}

  render() {
    return <span>demo page</span>;
  }
}
```

我们都知道，在 react 中，有两种类型的组件，function 组件和 class 组件。其中 class 类不仅允许内部状态(`state`)的存在，还有完整的生命周期钩子。

前面说到 class 类组件有完整的生命周期钩子。这些生命周期钩子是从哪来的呢？毕竟 class 类组件就是原生的 class 类写法。

其实 React 内置了一个 Component 类，生命周期钩子都是从它这里来的，麻烦的地方就是每次都要继承。

综合以上的对比，我们可以看出，生命周期的出现，主要是为了便于开发&&更好的开发。

React 生命周期使用小提示：

> 1. getDerivedStateFromProps 被 React 官方归类为不常用的生命周期，能不用就尽量不用，前面用那么多篇幅讲这个生命周期主要是为了加深对 Reac 运行机制的理解。
> 2. unsafe

> 下面开始咱们今天的主题 Hooks。

## Hooks

React v16.7.0-alpha 中第一次引入了  [Hooks](https://reactjs.org/docs/hooks-intro.html)  的概念， 为什么要引入这个东西呢？

有两个原因：

1.  React 官方觉得 class 组件太难以理解，OO（面向对象）太难懂了
2.  React 官方觉得 ， React 生命周期太难理解。

最终目的就是， 开发者不用去理解 class， 也不用操心生命周期方法。

但是 React 官方又说， Hooks 的目的并不是消灭类组件。

> 此处表示 😑

但无论如何，既然 react 官方这样说了，那咱们就来了解一下这个 Hooks。

### 1. API

我们来看下 Hooks 的 API，下面是[官网](https://reactjs.org/docs/hooks-reference.html)上的截图：
![image.png](https://upload-images.jianshu.io/upload_images/2041009-ea81de82513c3eff.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

乍一看还是挺多的， 其实有很多的 Hook 还处在实验阶段，很可能有一部分要被砍掉， 目前大家只需要熟悉的， 三个就够了：

- useState
- useEffect
- useContext

#### 1.1 useState

> 看例子 - hooksdemo

进去就调用了 useState， 传入 0，对 state 进行初始化，此时 count 就是 0， 返回一个数组， 第一个元素就是 state 的值，第二个元素是更新 state 的函数。

```js
// 下面代码等同于： const [count, setCount] = useState(0);
const result = useState(0);
const count = result[0];
const setCount = result[1];
```

利用 count 可以读取到这个 state，利用 setCount 可以更新这个 state，而且我们完全可以控制这两个变量的命名，只要高兴，你完全可以这么写:

```js
const [theCount, updateCount] = useState(0);
```

因为 useState 在 Counter 这个函数体中，每次 Counter 被渲染的时候，这个 useState 调用都会被执行，useState 自己肯定不是一个纯函数，因为它要区分第一次调用（组件被 mount 时）和后续调用（重复渲染时），只有第一次才用得上参数的初始值，而后续的调用就返回“记住”的 state 值。

> 看到这里，心里可能会有这样的疑问：如果组件中多次使用 useState 怎么办？React 如何“记住”哪个状态对应哪个变量？

React 是完全根据 useState 的调用顺序来“记住”状态归属的，假设组件代码如下：

```js
const Counter = () => {
  const [count, setCount] = useState(0);
  const [foo, updateFoo] = useState("foo");

  // ...
};
```

每一次 Counter 被渲染，都是第一次 useState 调用获得 count 和 setCount，第二次 useState 调用获得 foo 和 updateFoo（这里我故意让命名不用 set 前缀，可见函数名可以随意）。

React 是渲染过程中的“上帝”，每一次渲染 Counter 都要由 React 发起，所以它有机会准备好一个**内存记录**，当开始执行的时候，每一次 useState 调用对应内存记录上一个位置，而且是按照顺序来记录的。React 不知道你把 useState 等 Hooks API 返回的结果赋值给什么变量，但是它也不需要知道，它只需要按照 useState 调用顺序记录就好了。

你可以理解为会有一个槽去记录状态。

正因为这个原因，**Hooks，千万不要在 if 语句或者 for 循环语句中使用！**

像下面的代码，肯定会出乱子的：

```js
const Counter = () => {
  const [count, setCount] = useState(0);
  if (count % 2 === 0) {
    const [foo, updateFoo] = useState("foo");
  }
  const [bar, updateBar] = useState("bar");
  // ...
};
```

因为条件判断，让每次渲染中 useState 的调用次序不一致了，于是 React 就错乱了。

#### 1.2 useEffect

除了 useState，React 还提供 useEffect，用于支持组件中增加副作用的支持。

在 React 组件生命周期中如果要做有副作用的操作，代码放在哪里？

如果您之前编写过 React 类组件，则应熟悉 componentDidMount，componentDidUpdate 和 componentWillUnmount 等生命周期方法。这副作用的代码就放在这里。

useEffect Hook 是这三种生命周期方法的组合。

useEffect 当组件第一次完成加载时运行一次，然后每次更新组件状态时运行一次。因为按钮单击正在修改状态，即组件 useEffect 方法运行。

在 Counter 组件，如果我们想要在用户点击“+”或者“-”按钮之后把计数值体现在网页标题上，这就是一个修改 DOM 的副作用操作，所以必须把 Counter 写成 class，而且添加下面的代码：

```js
componentDidMount() {
  document.title = `Count: ${this.state.count}`;
}

componentDidUpdate() {
  document.title = `Count: ${this.state.count}`;
}
```

而有了 useEffect，我们就不用写一个 class 了，对应代码如下：

```js
import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${this.state.count}`;
  });

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};
```

seEffect 的参数是一个函数，组件每次渲染之后，都会调用这个函数参数，这样就达到了 componentDidMount 和 componentDidUpdate 一样的效果。

虽然本质上，依然是 componentDidMount 和 componentDidUpdate 两个生命周期被调用，但是现在我们关心的不是 mount 或者 update 过程，而是“after render”事件，useEffect 就是告诉组件在“渲染完”之后做点什么事。

读者可能会问，现在把 componentDidMount 和 componentDidUpdate 混在了一起，那假如某个场景下我只在 mount 时做事但 update 不做事，用 useEffect 不就不行了吗？

其实，用一点小技巧就可以解决。useEffect 还支持第二个可选参数，只有同一 useEffect 的两次调用第二个参数不同时，第一个函数参数才会被调用. 所以，如果想模拟 componentDidMount，只需要这样写：

```js
useEffect(() => {
  // 这里只有mount时才被调用，相当于componentDidMount
}, [123]);
```

在上面的代码中，useEffect 的第二个参数是 [123]，其实也可以是任何一个常数，因为它永远不变，所以 useEffect 只在 mount 时调用第一个函数参数一次，达到了 componentDidMount 一样的效果。

#### 1.3 useContext - 用到的很好，暂时不做介绍

React Context API 大家都很少用到，有兴趣的同学可以去了解一下。

### 2. 简介

上面我们介绍了 useState、useEffect 两个最基本的 Hooks，可以感受到，Hooks 将大大简化使用 React 的代码。

首先我们可能不再需要 class 了，虽然 React 官方表示 class 类型的组件将继续支持，但是，业界已经普遍表示会迁移到 Hooks 写法上，也就是放弃 class，只用函数形式来编写组件。

Hooks 发布后， 会带来什么样的改变呢？ 毫无疑问， 未来的组件， 更多的将会是函数式组件。

## 参考

- https://zh-hans.reactjs.org/docs/thinking-in-react.html
- https://angular.io/guide/lifecycle-hooks
- https://cn.vuejs.org/v2/guide/instance.html#%E5%AE%9E%E4%BE%8B%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90
- http://react-china.org/t/react-v16-7-0-alpha-hooks/26839
- [react 生命周期各版本对比](https://www.cnblogs.com/erbingbing/p/10211495.html)
- [React v15 到 v16.3, v16.4 新生命周期总结以及使用场景](https://blog.csdn.net/Napoleonxxx/article/details/81120854)
- [React 生命周期图](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
- [全面了解 React 新功能: Suspense 和 Hooks](https://segmentfault.com/a/1190000017483690)
