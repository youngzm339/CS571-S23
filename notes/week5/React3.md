# React 3

## React Fragments（React 片段）：

React 片段是一个用于包装多个子元素的特殊组件。它们允许我们在不引入额外 DOM 节点的情况下，将多个元素组合在一起。使用 React 片段，我们可以在组件中返回多个子元素而无需使用额外的包装元素。

```javascript
import React from "react";

function App() {
  return (
    <>
      <h1>Hello</h1>
      <p>React Fragments</p>
    </>
  );
}
```

### 组件和片段有什么区别？

组件是可重用的、独立的、有状态或无状态的代码单元，用于构建用户界面的一部分。组件接收输入（称为 props）并返回用于描述该组件在屏幕上显示的元素树。组件可以包含其他组件，形成组件层次结构。它们具有自己的生命周期、状态和方法，并且可以通过 props 传递数据和回调函数。

片段是一种特殊的组件，用于在不引入额外 DOM 节点的情况下包装多个子元素。它允许我们将多个元素组合在一起，而不需要使用额外的包装元素。片段不会创建新的 DOM 节点，而是在渲染时直接返回其子元素。片段通常用于在组件中返回多个子元素，并且对于需要在组件中返回多个元素而不引入额外层级的情况非常有用。

下面是组件和片段之间的区别总结：

组件：

- 可重用的、独立的代码单元。
- 可以包含其他组件，形成组件层次结构。
- 具有自己的生命周期、状态和方法。
- 通过 props 传递数据和回调函数。

片段：

- 用于包装多个子元素。
- 允许在不引入额外 DOM 节点的情况下组合元素。
- 不会创建新的 DOM 节点，而是直接返回其子元素。

## 在 React 中共享状态（Share State）：

在 React 中，组件之间的状态共享是通过 props 和上下文（context）来实现的。通过将状态作为属性传递给子组件，我们可以在整个应用程序中共享数据。另外，React 还引入了状态管理库（如 Redux 和 MobX），以简化大型应用程序中的状态共享和管理。

### props

在父组件中，我们可以通过在子组件的标签上添加属性来传递数据。这些属性会作为一个名为 props 的对象被子组件接收

```javascript
import React, { useState } from "react";

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Child count={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

function Child({ count }) {
  return <p>Count: {count}</p>;
}
```

### 上下文（Context）

在 React 中，上下文（Context）是一种用于在组件树中共享数据的机制。它允许我们在组件之间传递数据，而无需手动通过 props 将数据逐层传递。

通常情况下，数据通过组件的 props 属性从父组件向子组件传递。但是，当应用程序的组件层次结构较深或多个组件需要访问相同的数据时，通过 props 一层层传递数据变得繁琐和冗长。这时，上下文提供了一种更便捷的方式来共享数据。

使用上下文，我们可以在组件树中的某个地方创建一个上下文提供者（Context Provider），并将数据传递给它。然后，在组件树的其他地方，我们可以使用上下文消费者（Context Consumer）来访问该数据。

通过这种方式，提供者组件中的数据可以在其子组件中被访问到，而无需通过 props 一层层传递。

### useContext Hook

`useContext` 是 React 提供的一个钩子函数，用于在函数组件中访问上下文（Context）的值。我们可以按照以下方式使用：

1. 创建上下文对象：
   首先，我们需要创建一个上下文对象，可以使用 `React.createContext()` 来创建。

```javascript
const MyContext = React.createContext();
```

2. 提供上下文的值：
   在某个组件中，我们可以使用上下文对象的 `Provider` 组件来提供上下文的值。

```javascript
function ParentComponent() {
const contextValue = "Hello, Context!";

return (
<MyContext.Provider value={contextValue}>
<ChildComponent />
</MyContext.Provider>
);
}


在上述示例中，`ParentComponent` 组件提供了上下文的值 `"Hello, Context!"` 给 `ChildComponent` 组件。

```

3. 使用 `useContext` 访问上下文的值：
   在需要访问上下文的组件中，我们可以使用 `useContext` 钩子来获取上下文的值。

```javascript
function ChildComponent() {
const contextValue = useContext(MyContext);

return <p>{contextValue}</p>;
}


在 `ChildComponent` 组件中，我们使用 `useContext` 钩子传入上下文对象 `MyContext`，并将返回的上下文值赋值给 `contextValue` 变量。然后，我们可以在组件中使用该值进行渲染。
```

在上述示例中，`ParentComponent` 通过 `MyContext.Provider` 提供了上下文的值给 `ChildComponent`，并在 `ChildComponent` 中使用 `useContext` 钩子来访问上下文的值。最终，渲染结果会显示 `"Hello, Context!"`。

使用 `useContext` 钩子可以简化在函数组件中访问上下文的过程，提高代码的可读性和可维护性。

## React 中的路由（Routing）：

在 React 应用程序中实现导航和路由功能通常需要使用第三方路由库，比如 React Router。React Router 提供了一组组件，用于定义不同路径下的页面和导航链接。它使得在单页应用程序中处理多个页面变得更加简单和直观。React 路由库最常用的是 React Router，它提供了强大而灵活的路由功能。

### React Router

#### 安装 React Router：

```shell
npm install react-router-dom
```

#### 路由器（Router）：

在 React Router 中，路由器是最顶层的组件，它负责将 URL 映射到相应的组件。在大多数情况下，将使用 `<BrowserRouter>` 组件作为路由器。它使用 HTML5 的 history API 来处理 URL，并将路由信息传递给子组件。示例代码如下：

```jsx
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
```

#### 路由定义：

在 React Router 中，可以使用 `<Route>` 组件定义路由。每个 `<Route>` 组件表示一个路径与相应组件的对应关系。例如，要将路径 "/home" 映射到 Home 组件，可以这样写：

```jsx
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Route path="/home" component={Home} />
    </div>
  );
}
```

#### 导航链接（Link）：

为了在应用程序中进行导航，React Router 提供了 `<Link>` 组件。它创建一个链接，点击该链接将导航到指定的路径。示例代码如下：

```jsx
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
```

#### 嵌套路由（Nested Routes）：

React Router 支持嵌套路由，即在组件内部定义子级路由。这使得可以在应用程序中创建复杂的页面结构。示例代码如下：

```jsx
function App() {
  return (
    <div>
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      {/* 嵌套的子级路由 */}
      <Route path="/home/subpage" component={SubPage} />
    </div>
  );
}
```

#### 路由参数（Route Parameters）：

有时，可能需要在路由中传递参数。React Router 允许通过使用占位符来定义动态路径参数。示例代码如下：

```jsx
function App() {
  return (
    <div>
      {/* :id 是动态参数 */}
      <Route path="/user/:id" component={User} />
    </div>
  );
}

function User(props) {
  const { id } = props.match.params;
  return <h2>User ID: {id}</h2>;
}
```

## Cookies Session Local

在 React 中，我们可以使用不同的机制来处理浏览器端的数据存储，包括 Cookies、Session Storage 和 Local Storage。这些机制提供了不同的用途和特性，适用于不同的数据存储需求。

### Cookies（Cookie）：

Cookies 是一种存储在用户浏览器中的小型文本文件，用于存储有关用户和网站之间的会话信息。Cookies 可以设置过期时间，可以在浏览器和服务器之间进行传输，可以被服务器读取和修改。

在 React 中，可以使用第三方库（如 `js-cookie`）来操作 Cookies。下面是一个使用 Cookies 的示例：

```javascript
import React, { useEffect } from "react";
import Cookies from "js-cookie";

function App() {
  useEffect(() => {
    // 设置 Cookie
    Cookies.set("username", "john");

    // 读取 Cookie
    const username = Cookies.get("username");
    console.log(username); // "john"

    // 删除 Cookie
    Cookies.remove("username");
  }, []);

  return <div>...</div>;
}
```

在上述示例中，我们使用 `js-cookie` 库来设置、读取和删除 Cookies。`Cookies.set()` 用于设置 Cookie，`Cookies.get()` 用于读取 Cookie，`Cookies.remove()` 用于删除 Cookie。

### Session Storage（会话存储）：

Session Storage 是一种在浏览器中存储数据的机制，数据在当前会话期间有效，关闭浏览器后会话数据将被删除。Session Storage 可以通过 JavaScript 的 `sessionStorage` 对象访问。

下面是一个使用 Session Storage 的示例：

```javascript
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    // 设置 Session Storage
    sessionStorage.setItem("username", "john");

    // 读取 Session Storage
    const username = sessionStorage.getItem("username");
    console.log(username); // "john"

    // 删除 Session Storage
    sessionStorage.removeItem("username");
  }, []);

  return <div>...</div>;
}
```

在上述示例中，我们使用 `sessionStorage` 对象来设置、读取和删除 Session Storage 中的数据。

### Local Storage（本地存储）：

Local Storage 是一种在浏览器中存储数据的机制，数据在浏览器关闭后仍然有效。Local Storage 可以通过 JavaScript 的 `localStorage` 对象访问。

下面是一个使用 Local Storage 的示例：

```javascript
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    // 设置 Local Storage
    localStorage.setItem("username", "john");

    // 读取 Local Storage
    const username = localStorage.getItem("username");
    console.log(username); // "john"

    // 删除 Local Storage
    localStorage.removeItem("username");
  }, []);

  return <div>...</div>;
}
```

在上述示例中，我们使用 `localStorage` 对象来设置、读取和删除 Local Storage 中的数据。
