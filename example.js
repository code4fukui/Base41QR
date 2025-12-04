//import { Base41QR } from "https://code4fukui.github.io/Base41QR/Base41QR.js";
import { Base41QR } from "./Base41QR.js";

console.log(Base41QR.encode(new Uint8Array([ 15, 255, 79, 209, 104, 252 ])));
console.log(Base41QR.encode(new Uint8Array([ 218 ])));
console.log(Base41QR.decode("01234ABCD"));
console.log(Base41QR.decode("%4"));
