# JavaScript 2

## Type Conversion

JavaScript 中的类型转换是指将一个数据类型转换为另一个数据类型的过程。JavaScript 提供了多种方式来进行类型转换，这些方式可以根据需要进行显式或隐式转换。

### 显式类型转换（Explicit Type Conversion）：

使用内置函数进行类型转换：JavaScript 提供了一些内置函数，如`Number()`、`String()`、`Boolean()`等，可以将其他类型转换为数字、字符串或布尔值。例如：

```javascript
var num = Number("42"); // 将字符串转换为数字
var str = String(123); // 将数字转换为字符串
var bool = Boolean(0); // 将数字转换为布尔值
```

使用一元加号（+）进行类型转换：一元加号可以将字符串转换为数字。例如：

```javascript
var num = +"42"; // 将字符串转换为数字
```

### 隐式类型转换（Implicit Type Conversion）：

字符串与数字的隐式转换：在某些情况下，JavaScript 会自动进行字符串与数字之间的转换。例如：

```javascript
var result = "3" + 4; // 结果为字符串"34"，因为加号运算符在操作数中有一个字符串，所以将数字转换为字符串并进行字符串拼接
var total = "10" - 5; // 结果为数字5，因为减号运算符只适用于数字，所以将字符串转换为数字进行运算
```

布尔值与其他类型的隐式转换：布尔值在需要转换为其他类型时，会被隐式地转换为相应的值。例如：

```javascript
var num = true + 1; // 结果为数字2，因为true会被转换为数字1
var str = false + "hello"; // 结果为字符串"falsehello"，因为false会被转换为字符串"false"
```

## forEach

`forEach` 是 JavaScript 数组的一个方法，用于遍历数组并对每个元素执行指定的操作。它接受一个回调函数作为参数，该回调函数会在数组的每个元素上被调用一次。

使用示例：

```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) {
  console.log(number);
});
```

上述示例中，`forEach` 方法将遍历 `numbers` 数组的每个元素，并将每个元素打印到控制台。

## map

`map` 也是 JavaScript 数组的一个方法，用于对数组中的每个元素进行转换，并返回一个新的数组。它接受一个回调函数作为参数，该回调函数会在数组的每个元素上被调用一次，并将返回的值组成一个新的数组。

使用示例：

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(function (number) {
  return number * 2;
});

console.log(doubledNumbers); // 输出: [2, 4, 6, 8, 10]
```

上述示例中，`map` 方法将遍历 `numbers` 数组的每个元素，并将每个元素乘以 2 后的结果组成一个新的数组 `doubledNumbers`。

## filter

`filter` 是 JavaScript 数组的一个方法，用于根据指定的条件筛选出符合条件的元素，并返回一个新的数组。它接受一个回调函数作为参数，该回调函数会在数组的每个元素上被调用一次，并根据返回值的真假来决定是否保留该元素。

使用示例：

```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

console.log(evenNumbers); // 输出: [2, 4]
```

上述示例中，`filter` 方法将遍历 `numbers` 数组的每个元素，并将符合条件（偶数）的元素组成一个新的数组 `evenNumbers`。
