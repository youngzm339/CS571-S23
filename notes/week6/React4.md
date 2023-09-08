# React 4

## Memoization（记忆化）

在 React 中，memoization 是一种优化技术，可以通过存储昂贵函数的结果并在相同输入的情况下重新使用这些结果，从而减少计算的次数。

### useCallback

`useCallback` 是一个 React Hook，它返回一个记忆化版本的回调函数。只有当依赖项变化时，才会更新这个回调函数。它可以阻止不必要的渲染，因为它可以阻止在每次渲染时都创建新的函数。

```jsx
import React, { useState, useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  return (
    <div>
      Count: {count}
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
```

### useMemo

`useMemo` 是另一个 React Hook，它返回一个记忆化的值。这个值只有在依赖项变化时才会重新计算。

```jsx
import React, { useState, useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);

  const expensiveComputation = useMemo(() => {
    return count * 2;
  }, [count]);

  return (
    <div>
      Double Count: {expensiveComputation}
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
    </div>
  );
}

export default App;
```

### React.memo

`React.memo` 是一个高阶组件，它对其组件进行优化，只有在其 props 改变时才会重新渲染。

```jsx
import React from "react";

const MyComponent = React.memo(function MyComponent(props) {
  /* render using props */
});

export default MyComponent;
```

## 自定义 Hook (custom Hook)

自定义 Hook 是一个函数，其名称以 “use” 开头，可能调用其他的 Hook。通过创建自定义 Hook，我们可以将组件逻辑抽象到可重用的函数中。

```jsx
import { useState, useEffect } from "react";

function useCustomHook() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  return data;
}
```

使用自定义 Hook:

```jsx
import React from "react";
import useCustomHook from "./useCustomHook";

function CustomComponent() {
  const data = useCustomHook();

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
}

export default CustomComponent;
```

## 自定义组件 (custom Component)

自定义组件允许你创建自己的组件，以便在应用程序中的多个位置重复使用。它们可以是函数组件或类组件。

```jsx
import React from "react";

function CustomComponent(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default CustomComponent;
```

使用自定义组件：

```jsx
import React from "react";
import CustomComponent from "./CustomComponent";

function App() {
  return (
    <div>
      <CustomComponent name="World" />
    </div>
  );
}

export default App;
```
