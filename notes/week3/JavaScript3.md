# JavaScript3

## 回调函数（Callback Function）

### 回调函数

回调函数是作为参数传递给另一个函数，并在稍后执行的函数。在 JavaScript 中，回调函数常用于处理异步操作，例如处理服务器请求的响应或在特定事件发生后执行任务。它们允许非阻塞执行，并有助于管理异步代码的流程。

### fetch

`fetch`函数是 JavaScript 内置的函数，用于进行网络请求并从服务器检索资源。它返回一个 Promise，该 Promise 解析为请求的响应。`fetch`函数常用于发起 HTTP 请求和与 API 进行交互。以下是使用`fetch`的示例：

```javascript
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => {
    // 处理检索到的数据
  })
  .catch((error) => {
    // 处理请求过程中发生的任何错误
  });
```

## slice(begl, endl) 和 concat(arr)

`slice`方法用于提取数组的一部分，并返回包含所选元素的新数组。它接受两个参数：`begl`指定起始索引，`endl`（可选）指定结束索引（不包含在内）。原始数组不会被修改。

`concat`方法用于合并两个或多个数组，并返回一个新数组。它不会修改原始数组。以下是使用`slice`和`concat`的示例：

```javascript
const fruits = ["apple", "banana", "orange", "grape", "kiwi"];

const slicedFruits = fruits.slice(1, 4);
console.log(slicedFruits); // 输出：['banana', 'orange', 'grape']

const moreFruits = ["pineapple", "mango"];
const mergedArray = fruits.concat(moreFruits);
console.log(mergedArray); // 输出：['apple', 'banana', 'orange', 'grape', 'kiwi', 'pineapple', 'mango']
```

## some(cb) 和 every(cb)

`some`方法用于检查数组中是否至少有一个元素满足回调函数指定的条件。如果至少有一个元素满足条件，返回`true`，否则返回`false`。

`every`方法用于检查数组中的所有元素是否都满足回调函数指定的条件。如果所有元素都满足条件，返回`true`，否则返回`false`。以下是示例：

```javascript
const numbers = [10, 20, 30, 40, 50];

const isGreaterThanTwenty = (number) => number > 20;

console.log(numbers.some(isGreaterThanTwenty)); // 输出：true
console.log(numbers.every(isGreaterThanTwenty)); // 输出：false
```

## reduce(cb, start)

`reduce`方法用于通过对数组的每个元素应用回调函数，将数组减少为单个值。回调函数接受四个参数：累加器、当前值、当前索引和数组本身。`reduce`方法对每个元素执行回调函数，传递前一次迭代的累加值和当前元素，并返回最终的累加值。

`start`参数是可选的初始值，用作累加器的初始值。如果提供了初始值，reduce 操作将从该初始值开始；否则，数组的第一个元素将作为初始值。

以下是使用`reduce`的示例：

```javascript
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sum); // 输出：15
```

## 扩展运算符（Spread Operator）

扩展运算符`...`是 JavaScript 中的语法，允许将可迭代对象（例如数组或字符串）扩展为单独的元素。它可以在多个上下文中使用，例如函数调用、数组字面量和对象字面量。

在数组中使用扩展运算符时，可以通过将现有数组的元素组合起来创建一个新数组。它类似于`concat`方法，但提供了更简洁的语法。以下是一个示例：

```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = [...array1, ...array2];

console.log(combinedArray); // 输出：[1, 2, 3, 4, 5, 6]
```

扩展运算符也可以用于将数组的各个元素作为参数传递给函数。以下是一个示例：

```javascript
const numbers = [1, 2, 3, 4, 5];

const maxNumber = Math.max(...numbers);

console.log(maxNumber); // 输出：5
```

## 数据复制（Data Copying）

### 引用复制（Reference Copy）

引用复制是一种简单的复制方法，它将原始变量的引用（内存地址）赋值给新变量。这意味着两个变量将引用相同的内存位置，当其中一个变量发生改变时，另一个变量也会受到影响。

```javascript
let originalArray = [1, 2, 3];
let copiedArray = originalArray; // 引用复制

copiedArray.push(4);

console.log(originalArray); // 输出：[1, 2, 3, 4]
console.log(copiedArray); // 输出：[1, 2, 3, 4]
```

在上面的示例中，`originalArray` 和 `copiedArray` 引用相同的数组。当我们修改 `copiedArray` 时，`originalArray` 也会受到影响，因为它们引用同一个数组对象。

### 浅复制（Shallow Copy）

浅复制创建一个新的变量，但是只复制原始变量中的值和引用。这意味着对于引用类型的数据，新变量将引用原始变量中的相同对象。当修改原始变量中的引用类型数据时，新变量也会受到影响。但是，对于原始类型的数据，新变量将拥有自己的独立副本。

```javascript
let originalObject = { name: "John", age: 30 };
let copiedObject = Object.assign({}, originalObject); // 浅复制

copiedObject.age = 40;

console.log(originalObject); // 输出：{ name: 'John', age: 30 }
console.log(copiedObject); // 输出：{ name: 'John', age: 40 }
```

在上面的示例中，我们使用 `Object.assign()` 方法进行浅复制。当我们修改 `copiedObject` 的 `age` 属性时，`originalObject` 不受影响，因为它们拥有各自的独立副本。但是，它们共享相同的 `name` 属性。

### 深复制（Deep Copy）

深复制是创建变量的完全独立副本，包括原始变量中的所有值和引用类型数据。这意味着当修改任何一个变量时，另一个变量都不会受到影响。

由于 JavaScript 语言本身没有提供内置的深复制方法，需要使用其他方式来实现深复制，例如递归遍历对象并复制所有属性和子对象。

```javascript
function deepCopy(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  let newObj = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    newObj[key] = deepCopy(obj[key]);
  }

  return newObj;
}

let originalArray = [1, 2, [3, 4]];
let copiedArray = deepCopy(originalArray); // 深复制

copiedArray[2][0] = 5;

console.log(originalArray); // 输出：[1, 2, [3, 4]]
console.log(copiedArray); // 输出：[1, 2, [5, 4]]
```

在上面的示例中，我们定义了一个 `deepCopy` 函数来实现深复制。当我们修改 `copiedArray` 中嵌套数组的值时，`originalArray` 不受影响，因为它们是独立的副本。

需要注意的是，深复制可能会导致性能上的损耗，特别是在处理大型或嵌套层级深的对象时。因此，在实际应用中，需要根据情况权衡使用深复制的必要性和性能考虑。
