### 函数一般来说，只应该做一件事，就是返回一个值。 如果你有多个操作，每个操作应该写成一个单独的函数。而且，数据的状态应该与操作方法分离。根据这种理念，React 的函数组件只应该做一件事情：(返回组件的 HTML 代码)，而没有其他的功能。这种只进行单纯的数据计算（换算）的函数，在函数式编程里面称为 "纯函数"（pure function）。例如：

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

### 看到这里，你可能会产生一个疑问：如果纯函数只能进行数据计算 (返回组件的 HTML 代码)，那些不涉及计算的操作（比如生成日志、储存数据、改变应用状态等等）应该写在哪里呢？函数式编程将那些跟数据计算无关的操作，都称为 "副效应" （side effect） 。如果函数内部直接包含产生副效应的操作，就不再是纯函数了，我们称之为不纯的函数。

### 钩子（hook）就是 React 函数组件的副效应解决方案，用来为函数组件引入副效应。 React Hooks 的意思是，组件尽量写成纯函数，如果需要外部功能和副作用，就用钩子把外部代码"钩"进来。 React Hooks 就是那些钩子。

### 由于副效应非常多，所以钩子有许多种。React 为许多常见的操作（副效应），都提供了专用的钩子。参考：https://zh-hans.react.dev/reference/react/useRef

1. useState()：保存状态
2. useContext()：保存上下文，组件之间共享状态
3. useRef()：保存引用
   - 可以在重新渲染之间 存储信息（普通对象存储的值每次渲染都会重置）。
   - 改变它 不会触发重新渲染（而 useState 状态变量会触发重新渲染）。
   - 对于组件的每个副本而言，这些信息都是本地的（外部变量则是共享的）。
   - 不要在渲染期间写入或者读取 ref.current，因为 React 期望组件主体 表现得像一个纯函数，所以：1）如果输入的（props、state 与 上下文）都是一样的，那么就应该返回一样的 JSX。2）以不同的顺序或用不同的参数调用它，不应该影响其他调用的结果。如果在渲染期间操作 ref.current，就破坏了 React 对组件主体的预期。
   - 可以在 事件处理程序或者 Effect 中读取和写入 ref。
4. useEffect()：是通用的副效应钩子 。找不到对应的钩子时，就可以用它。
5. useReducer()：组件发出 action 与状态管理器通信。状态管理器收到 action 以后，使用 Reducer 函数算出新的状态。

### useEffect()本身是一个函数，由 React 框架提供，在函数组件内部调用即可, 举例来说，我们希望组件加载以后，网页标题（document.title）会随之改变。那么，改变网页标题这个操作，就是组件的副效应，必须通过 useEffect()来实现。

```javascript
import React, { useEffect } from 'react';

function Welcome(props) {
  useEffect(() => {
    document.title = 'loading completed';
  });
  return <h1>Hello, {props.name}</h1>;
}
```

### 有时候，我们不希望 useEffect()每次渲染都执行，这时可以使用它的第二个参数，使用一个数组指定副效应函数的依赖项，只有依赖项发生变化，才会重新渲染。例如：只有 props.name 改变的时候才更改标题：

```javascript
function Welcome(props) {
  useEffect(() => {
    document.title = `Hello, ${props.name}`;
  }, [props.name]);
  return <h1>Hello, {props.name}</h1>;
}
```

### useEffect() 的用途通常有：

- 获取数据（data fetching）
- 事件监听或订阅（setting up a subscription）
- 改变 DOM（changing the DOM）
- 输出日志（logging）

### 副效应是随着组件加载而发生的，那么组件卸载时，可能需要清理这些副效应。useEffect()允许返回一个函数，在组件卸载时，执行该函数，清理副效应。如果不需要清理副效应，useEffect()就不用返回任何值。
