//// Toán tử số học

var a = 5;
var b = 6;

console.log(a + b); // 11
console.log(a - b); // -1
console.log(a * b); // 30
console.log(a / b); // 0.8(3)
console.log(a % b); // 5
console.log(a ** b); // 15625

a++;
console.log(a); // 6

b--;
console.log(b); // 5

// Lưu ý
var c = 8;

console.log(c++);
console.log(c);

//// Toán tử gán

//// Khác biệt giữa ++a và a++
console.log("--- Hậu tố ---");

var number1 = 1;

console.log(number1++); // 1
console.log(number1); // 2

console.log(number1++); // 2
console.log(number1); // 3

console.log("--- Tiền tố ---");

var number2 = 1;

console.log(++number2); // 2
console.log(number2); // 2

console.log(++number2); // 3
console.log(number2); // 3

// Toán tử -- sẽ tương tự
// Một số ví dụ khác

var a = 3;
var b = ++a * 2 + a++;
// b = 4*2 + 4 = 12
