# Base41QR

QRコードの英数字モード向けBase41エンコーディングです。英数字のうち、スペース(' ')、ピリオド('.')、スラッシュ('/')、コロン(':')を使用しません。

## デモ
https://code4fukui.github.io/Base41QR/

## 特徴
- QRコードの英数字モード向けBase41エンコーディング
- スペース、ピリオド、スラッシュ、コロンを使用しないコンパクトなエンコーディング

## 使い方
```js
import { Base41QR } from "https://code4fukui.github.io/Base41QR/Base41QR.js";

console.log(Base41QR.encode(new Uint8Array([0, 43, 20, 92, 40, 141])));
console.log(Base41QR.encode(new Uint8Array([218])));
console.log(Base41QR.decode("012345678"));
console.log(Base41QR.decode("5D"));
```

## ライセンス
MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
