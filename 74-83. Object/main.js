var person = {
  name: "Nguyễn Minh Tú",
  "phone - number": "0123456789",
  getPhone: function () {
    return this["phone - number"];
  },
  getName: function () {
    return this.name;
  },
};

console.log(person); // {name: 'Nguyễn Minh Tú', phone - number: '0123456789'}

// Thêm thuộc tính
person.email = "minhtu@gmail.com";
person["age"] = 20;

console.log(person); // {name: 'Nguyễn Minh Tú', phone - number: '0123456789', email: 'minhtu@gmail.com', age: 20}

// Get thuộc tính
console.log(person.name); // Nguyễn Minh Tú
console.log(person["name"]); // Nguyễn Minh Tú
console.log(person.getName()); // Nguyễn Minh Tú

// Sử dụng Constructor
function Person(name, age, phone, email) {
  this.name = name;
  this.age = age;
  this.phone = phone;
  this.email = email;

  this.getName = function () {
    return this.name;
  };
}

// Cách 2
var Person = function (name, age, phone, email) {
  this.name = name;
  this.age = age;
  this.phone = phone;
  this.email = email;

  this.getName = function () {
    return this.name;
  };
};

var person = new Person("Nguyễn Minh Tú", 20, "0123456789", "minhtu@gmail.com");
console.log(person); // Person {name: 'Nguyễn Minh Tú', age: 20, phone: '0123456789', email: 'minhtu@gmail.com', getName: ƒ}
console.log(person.getName()); // Nguyễn Minh Tú

// Prototype
function Person(name, age) {
  this.name = name;
  this.age = age;

  this.getName = function () {
    return this.name;
  };
}

Person.prototype.address = "1 Võ Văn Ngân";

var personOne = new Person("One", 10);
var personTwo = new Person("Two", 11);

console.log(personOne.address); // 1 Võ Văn Ngân
console.log(personTwo.address); // 1 Võ Văn Ngân

// Date Object
var date = new Date();

var day = date.getDate().toString().padStart(2, "0");
var month = (date.getMonth() + 1).toString().padStart(2, "0"); // phương thức getMonth trả về giá trị 0 - 11
var year = date.getFullYear().toString().padStart(2, "0");

var hours = date.getHours().toString().padStart(2, "0");
var minutes = date.getHours().toString().padStart(2, "0");
var seconds = date.getSeconds().toString().padStart(2, "0");

console.log(`${day}/${month}/${year} ${hours}:${minutes}:${seconds}`);
