# Function

## Định nghĩa hàm:

```js
function sum(a, b) {
  return a + b;
}

console.log(sum(10, 20)); // 30
```

## Sử dụng Arguments và vòng lăp for

```js
function sumArgumentsFor() {
  var sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

function sumArgumentsForOf() {
  var sum = 0;
  for (argument of arguments) {
    sum += argument;
  }
  return sum;
}

console.log(sumArgumentsFor(10, 20, 30, 40)); // 100
console.log(sumArgumentsForOf(10, 20, 30, 40)); // 100
```

## Declaration Function và Expression Function

```js
function declarationFunction() {
  console.log("declarationFunction");
}

var expressionFunction = function () {
  console.log("expressionFunction");
};

declarationFunction(); // declarationFunction
expressionFunction(); // expressionFunction
```

## Khả năng Hosting

Hosting là khả năng có thể sử dụng trước khi nó được khai báo:

- Declaration Function: có khả năng hosting
- Express Function: không có khả năng

```js
declarationFunctionHosting(); // declarationFunction
expressionFunctionHosting(); // Uncaught TypeError: expressionFunctionHosting is not a function

function declarationFunctionHosting() {
  console.log("declarationFunction");
}

var expressionFunctionHosting = function () {
  console.log("expressionFunction");
};
```
