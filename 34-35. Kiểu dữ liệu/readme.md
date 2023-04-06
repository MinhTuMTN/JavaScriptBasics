# Kiểu dữ liệu

## Kiểu dữ liệu nguyên thủy

```js
// Number
var a = 10.5;
var b = 10;
console.log(typeof a); // number

// String
var fullName = "Minh Tú";
console.log(typeof fullName); // string

// Boolean
var isBoolean = true;
console.log(typeof isBoolean); // boolean

// Undefined (khai báo mà không truyền giá trị)
var c;
console.log(typeof c); // undefined

// Null (Mặc dù đây là kiểu dữ liệu null nhưng hiển thị là object. Đây là nét kỳ dị của JavaScript)
var d = null;
console.log(typeof d); // object

// Symbol
var id = Symbol("id");
var id2 = Symbol("id");
console.log(id == id2); // false
console.log(id === id2); // false
console.log(typeof id); // symbol
```

## Kiểu dữ liệu phức tạp

```js
// function
var isAdultFunction = function (age) {
  if (age >= 18) return true;
  return false;
};

console.log(isAdultFunction(19)); // true
console.log(typeof isAdultFunction); // function
console.log(typeof isAdultFunction(19)); // boolean (do kết quả function trả về là true)

// object (object + array)
var person = {
  name: "Minh Tú",
  age: 19,
};
console.log(person); // {name: 'Minh Tú', age: 19}
console.log(person["name"]); // Minh Tú
console.log(typeof person); // object

var array = [1, 2, 3];
console.log(array); // [1, 2, 3]
console.log(array[1]); // 2
console.log(typeof array); // object
```
