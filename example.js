//import { Base45QR } from "https://code4fukui.github.io/Base45QR/Base45QR.js";
import { Base45QR } from "./Base45QR.js";

console.log(Base45QR.decode("01234ABCD"));
console.log(Base45QR.decode("A"));
console.log(Base45QR.encode(new Uint8Array([ 40 ])));
console.log(Base45QR.encode(new Uint8Array([ 0, 33, 116, 95, 31, 179, 64 ])));
