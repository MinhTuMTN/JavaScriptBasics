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
