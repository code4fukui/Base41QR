# Base41QR

Base41 encoding for QR code alpha numeric mode

## sample app

https://code4fukui.github.io/Base41QR/

## usage

```js
import { Base41QR } from "https://code4fukui.github.io/Base41QR/Base41QR.js";

console.log(Base41QR.encode(new Uint8Array([ 15, 255, 79, 209, 104, 252 ])));
console.log(Base41QR.encode(new Uint8Array([ 218 ])));
console.log(Base41QR.decode("01234ABCD"));
console.log(Base41QR.decode("%4"));
```

## reference

- [Base45QR](https://github.com/code4fukui/Base45QR/)
