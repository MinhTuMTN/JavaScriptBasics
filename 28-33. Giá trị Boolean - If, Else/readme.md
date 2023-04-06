# Giá trị Boolean - Câu lệnh điều kiện

## Giá trị Boolean

Boolean có 2 giá trị và true và false. Trong JavaScript, có 6 loại giá trị sau là false:

- false
- '' (chuỗi rỗng)
- undefined
- NaN
- 0
- null

Ví dụ:

```js
if ("Minh Tú") console.log("Hello");
else console.log("Bye");
// Kết quả: Hello (do 'Minh Tú' không phải là một chuỗi rỗng)
```

## Câu lệnh điều kiện

Tương tự như C++

```js
if (điều kiện 1) {
    // Code thực hiện nếu điều kiện 1 đúng
} else if (điều kiện 2) {
    // Code thực hiện nếu điều kiện 1 sai và điều kiện 2 đúng
} else {
    // Code thực hiện nếu cả 2 điều kiện đều sai
}
```

## Toán tử logic

| Toán tử | Công dụng |
| ------- | --------- |
| &&      | AND       |
| \|\|    | OR        |
| !       | NOT       |

Ví dụ:

```js
a = true;
b = false;

c = a && b; // false
d = a || b; // true
e = !b; // true
f = a && !b; // true
```
