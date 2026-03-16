# Base41QR

Base41 エンコーディングを使ったQRコードのアルファベット数字モードです。スペース、ピリオド、スラッシュ、コロンは使用しません。

## 機能
- QRコードのアルファベット数字モードに対応したBase41エンコーディング
- スペース、ピリオド、スラッシュ、コロンを使用しない簡潔なエンコーディング

## 使い方
```js
import { Base41QR } from "https://code4fukui.github.io/Base41QR/Base41QR.js";

console.log(Base41QR.encode(new Uint8Array([0, 43, 20, 92, 40, 141])));
console.log(Base41QR.encode(new Uint8Array([218])));
console.log(Base41QR.decode("012345678"));
console.log(Base41QR.decode("5D"));
```

## ライセンス
MIT License