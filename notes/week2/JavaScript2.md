# JavaScript 2

## forEach
`forEach` 是 JavaScript 数组的一个方法，用于遍历数组并对每个元素执行指定的操作。它接受一个回调函数作为参数，该回调函数会在数组的每个元素上被调用一次。

使用示例：
```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
  console.log(number);
});
```

上述示例中，`forEach` 方法将遍历 `numbers` 数组的每个元素，并将每个元素打印到控制台。

## map
`map` 也是 JavaScript 数组的一个方法，用于对数组中的每个元素进行转换，并返回一个新的数组。它接受一个回调函数作为参数，该回调函数会在数组的每个元素上被调用一次，并将返回的值组成一个新的数组。

使用示例：
```javascript
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(function(number) {
  return number * 2;
});

console.log(doubledNumbers); // 输出: [2, 4, 6, 8, 10]
```

上述示例中，`map` 方法将遍历 `numbers` 数组的每个元素，并将每个元素乘以2后的结果组成一个新的数组 `doubledNumbers`。

## filter
`filter` 是 JavaScript 数组的一个方法，用于根据指定的条件筛选出符合条件的元素，并返回一个新的数组。它接受一个回调函数作为参数，该回调函数会在数组的每个元素上被调用一次，并根据返回值的真假来决定是否保留该元素。

使用示例：
```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});

console.log(evenNumbers); // 输出: [2, 4]
```

上述示例中，`filter` 方法将遍历 `numbers` 数组的每个元素，并将符合条件（偶数）的元素组成一个新的数组 `evenNumbers`。

这些方法都是 JavaScript 数组常用的高阶函数，能够提供便利和灵活的数组操作方式。