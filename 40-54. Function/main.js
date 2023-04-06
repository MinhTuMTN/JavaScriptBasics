function sum(a, b) {
  return a + b;
}

console.log(sum(10, 20)); // 30

////
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

////
function declarationFunction() {
  console.log("declarationFunction");
}

var expressionFunction = function () {
  console.log("expressionFunction");
};

declarationFunction();
expressionFunction();

////
declarationFunctionHosting(); // declarationFunction
expressionFunctionHosting(); // Uncaught TypeError: expressionFunctionHosting is not a function

function declarationFunctionHosting() {
  console.log("declarationFunction");
}

var expressionFunctionHosting = function () {
  console.log("expressionFunction");
};

///

// function example() {
//   var x = 1;
//   let y = 2;
//   if (true) {
//     var x = 3;
//     let y = 4;
//     console.log(x); // kết quả: 3
//     console.log(y); // kết quả: 4
//   }
//   console.log(x); // kết quả: 3
//   console.log(y); // kết quả: 2
// }
// example();
