# Base41QR

Base41 encoding for QR code alphanumeric mode, without using ' '(space), '.', '/', ':' in alphanumeric.

## Demo
https://code4fukui.github.io/Base41QR/

## Features
- Base41 encoding for QR code alphanumeric mode
- Compact encoding without using space, period, slash, and colon

## Usage
```js
import { Base41QR } from "https://code4fukui.github.io/Base41QR/Base41QR.js";

console.log(Base41QR.encode(new Uint8Array([0, 43, 20, 92, 40, 141])));
console.log(Base41QR.encode(new Uint8Array([218])));
console.log(Base41QR.decode("012345678"));
console.log(Base41QR.decode("5D"));
```

## License
MIT License