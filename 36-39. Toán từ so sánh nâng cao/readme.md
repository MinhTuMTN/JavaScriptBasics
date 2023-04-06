# Toán tử so sánh nâng cao

## Sự khác biệt giữa == và ===

```js
console.log("1" == 1); // true
console.log("1" === 1); // false
```

Nguyên nhân xảy ra điều này là do:

- Khi dùng toán tử **==**: JavaScript sẽ tự động chuyển đổi 2 vế thành cùng 1 kiểu dữ liệu rồi đi so sánh giá trị giữa chúng. Tức là:  
  '1' == 1 &rarr; '1 == 1' &rarr; true
- Khi dùng toán tử **===**: JavaScript sẽ kiểm tra kiểu dữ liệu của 2 vế là khác nhau nên trả về giá trị là false.

## **Truthy** và **Falsy**

Một giá trị được gọi là **Truthy** khi nó chuyển sang Boolean có giá trị là true. Ngược lại giá trị đó là **Falsy**

Ví dụ Truthy:

```js
console.log(Boolean(1)); // true
console.log(!!"Minh Tú"); // true
```

> **Lưu ý**  
> Có thể sử dụng **!!** để chuyển đổi dữ liệu sang kiểu Boolean thay vì dùng Boolean.

Ví dụ Falsy:

```js
console.log(!!""); // false
console.log(!!0); // false
console.log(!!false); // false
console.log(!!NaN); // false
console.log(!!undefined); // false
console.log(!!null); // false
```

**_Ngoại lệ_**

- document.all chuyển sang boolean sẽ là false
- document.all khi là toán hạng của toán tử so sánh == hoặc != sẽ là undefined
- typeof document.all sẽ trả về "undefined"

## Toán tử so sánh nâng cao:

```js
console.log("A" && "B" && "C"); // C
console.log("A" && "" && "C"); // ""

console.log("A" || "B" || "C"); // A
console.log("A" || "" || "C"); // A
```

- Toán tử && sẽ chạy từ trái sang phải cho đến khi gặp giá trị **Falsy** thì sẽ lấy giá trị đó và dừng lại
- Ngược lại toán tử || sẽ chạy từ trái sang phải cho đến khi gặp giá trị Truthy thì sẽ lấy giá trị đó và dừng lại
