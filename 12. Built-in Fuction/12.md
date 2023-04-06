# Built-in Fuction

## alert

Hiển thị một cửa sổ popup thông báo

```js
alert("Hello");
```

## console

Hiển thị thông báo bên trong tab console Dev Tools(F12)

```js
console.log("Hello");
```

Ngoài ra còn có thể chỉ định warning (màu vàng) và lỗi (error - màu đỏ)

```js
console.warn("Warning");
console.error("Error");
```

## setTimeout

Thực hiện lệnh sau một khoản thời gian (đơn vị mili giây)

```js
setTimeout(function () {
  console.log("Heloo");
}, 1000);
```

## setInterval

Tương tự như setTimeout nhưng lặp lại nhiều lần thay vì chỉ 1 lần

```js
setInterval(function () {
  console.log("Hellooo");
}, 1000);
```
