let originalObject = { name: "John", age: 30 };
let copiedObject = Object.assign({}, originalObject); // 浅复制

copiedObject.age = 40;

console.log(originalObject); // 输出：{ name: 'John', age: 30 }
console.log(copiedObject); // 输出：{ name: 'John', age: 40 }

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