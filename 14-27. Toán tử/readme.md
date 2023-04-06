# Toán tử

## Toán tử số học

| Ký hiệu | Công dụng     |
| ------- | ------------- |
| +       | Cộng          |
| -       | Trừ           |
| \*      | Nhân          |
| /       | Chia          |
| %       | Chia lấy dư   |
| \*\*    | Lũy thừa      |
| ++      | Tăng 1 đơn vị |
| --      | Giảm 1 đơn vị |

Ví dụ:

```js
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
```

Lưu ý:

```js
var c = 8;

console.log(c++);
console.log(c);
```

Trong đoạn code trên có dòng **console.log(c++)**, lúc này sẽ in ra 8 sau đó mới công thêm 1 đơn vị. Chính vì vậy mà lúc sau mới in ra giá trị 9.

- x++ tăng giá trị biến lên 1 và trả về giá trị trước khi tăng
- ++x tăng giá trị biến lên 1 và trả về giá trị sau khi tăng
- x-- giảm giá trị biến xuống 1 và trả về giá trị trước khi giảm
- --x giảm giá trị biến xuống 1 và trả về giá trị sau khi giảm

## Toán tử gán

| Ký hiệu | Ví dụ     | Tương đương  |
| ------- | --------- | ------------ |
| =       | a = b     | a = b        |
| +=      | a += b    | a = a + b    |
| -=      | a -= b    | a = a - b    |
| \*=     | a \*= b   | a = a \* b   |
| /=      | a /= b    | a = a / b    |
| %=      | a %= b    | a = a % b    |
| \*\*=   | a \*\*= b | a = a \*\* b |

## Toán tử nối chuỗi

Để nối 2 chuỗi với nhau ta dùng toán tử **+**.
Nếu một trong 2 bên là chuỗi thì kết quả sẽ là một chuỗi  
Ví dụ:

```js
console.log("12" + 3); // 123 (kiểu str)
```

Một số ví dụ khác:

```js
var a = 12;
var b = "13";
var c = 14;

console.log(a + "Minh Tú"); // 12Minh Tú
console.log(a + b + c); // 121314
console.log(b + " " + c); // 13 14
console.log(a + c + b); // 2613
```
