import { Base45QR } from "https://code4fukui.github.io/Base45QR/Base45QR.js";
//import { Base45QR } from "./Base45QR.js";

console.log(Base45QR.encode(new Uint8Array([ 15, 255, 79, 209, 104, 252 ])));
console.log(Base45QR.encode(new Uint8Array([ 218 ])));
console.log(Base45QR.decode("01234ABCD"));
console.log(Base45QR.decode("%4"));
