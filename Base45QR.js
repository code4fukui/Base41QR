import { BitStream } from "./BitStream.js"
import { decodeAlphanumeric } from "./decodeAlphanumeric.js";
import { qrBitBuffer } from "./qrBitBuffer.js";
import { encodeAlphanumeric } from "./encodeAlphanumeric.js";

const encode = (bin) => {
  //const bin = new TextEncoding().encode(s);
  const stream = new BitStream(bin);
  const res = decodeAlphanumeric(stream, bin.length);
  console.log(res);
  return res.text;
};

const decode = (s) => {
  const enc = encodeAlphanumeric(s);
  const buf = new qrBitBuffer();
  enc.write(buf);
  console.log(buf.getBuffer());
  return new Uint8Array(buf.getBuffer());
}

export const Base45QR = { encode, decode };
