# Base45QR

under construction

## sample app

https://code4fukui.github.io/Base45QR/

## usage

```js
import { Base45QR } from "https://code4fukui.github.io/Base45QR/Base45QR.js";

console.log(Base45QR.encode(new Uint8Array([ 15, 255, 79, 209, 104, 252 ])));
console.log(Base45QR.encode(new Uint8Array([ 218 ])));
console.log(Base45QR.decode("01234ABCD"));
console.log(Base45QR.decode("%4"));
```

## reference

- [RFC 9285 - The Base45 Data Encoding 日本語訳](https://tex2e.github.io/rfc-translater/html/rfc9285.html)
