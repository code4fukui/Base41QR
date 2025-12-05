# Base41QR

Base41 encoding for QR code alpha numeric mode

## sample app

https://code4fukui.github.io/Base41QR/

## usage

```js
import { Base41QR } from "https://code4fukui.github.io/Base41QR/Base41QR.js";

console.log(Base41QR.encode(new Uint8Array([0, 43, 20, 92, 40, 141])));
console.log(Base41QR.encode(new Uint8Array([218])));
console.log(Base41QR.decode("012345678"));
console.log(Base41QR.decode("5D"));
```

## reference

- [Base45QR](https://github.com/code4fukui/Base45QR/)
