console.log("1" == 1); // true
console.log("1" === 1); // false

////

console.log(Boolean(1)); // true
console.log(!!"Minh Tú"); // true
//
console.log(!!""); // false
console.log(!!0); // false
console.log(!!false); // false
console.log(!!NaN); // false
console.log(!!undefined); // false
console.log(!!null); // false

////

console.log("A" && "B" && "C"); // C
console.log("A" && "" && "C"); // ""

console.log("A" || "B" || "C"); // A
console.log("A" || "" || "C"); // A
