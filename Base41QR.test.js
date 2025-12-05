import * as t from "https://deno.land/std/testing/asserts.ts";
import { Base41QR } from "./Base41QR.js";
import * as sec from "https://code4fukui.github.io/sec.js/sec.js";

Deno.test("simple encode", () => {
  t.assertEquals(Base41QR.encode(new Uint8Array([65, 66])), "9*J");
  t.assertEquals(Base41QR.encode(new TextEncoder().encode("Hello!!")), "B11GK-G%$0X");
  t.assertEquals(Base41QR.encode(new Uint8Array([1, 2, 3, 4, 5])), "06C0IY05");
});
Deno.test("simple decode", () => {
  t.assertEquals(Base41QR.decode("9*J"), new Uint8Array([65, 66]));
  t.assertEquals(Base41QR.decode("B11GK-G%$0X"), new TextEncoder().encode("Hello!!"));
  t.assertEquals(Base41QR.decode("06C0IY05"), new Uint8Array([1, 2, 3, 4, 5]));
});
Deno.test("all", () => {
  for (let i = 1; i <= 2; i++) {
    const b = new Uint8Array(i);
    for (let j = 0; j < 1 << (i * 8); j++) {
      b[0] = j;
      if (i >= 1) b[1] = j >> 8;
      const s = Base41QR.encode(b);
      const b2 = Base41QR.decode(s);
      t.assertEquals(b, b2);
    }
  }
});
Deno.test("overflow", () => {
  t.assertEquals(Base41QR.encode(new Uint8Array([0xff])), "69");
  t.assertEquals(Base41QR.decode("69"), new Uint8Array([0xff]));
  t.assertEquals(Base41QR.decode("00"), new Uint8Array([0x00]));
  t.assertEquals(Base41QR.decode("0-"), new Uint8Array([40]));
  t.assertEquals(Base41QR.decode("10"), new Uint8Array([41]));
  t.assertThrows(() => Base41QR.decode("6A"));
  t.assertThrows(() => Base41QR.decode("A0"));

  t.assertEquals(Base41QR.encode(new Uint8Array([0x00, 0x00])), "000");
  t.assertEquals(Base41QR.encode(new Uint8Array([0x00, 0x01])), "001");
  t.assertEquals(Base41QR.encode(new Uint8Array([0xff, 0xff])), "*-H");
  t.assertEquals(Base41QR.encode(new Uint8Array([0xff, 0xfe])), "*-G");
  t.assertEquals(Base41QR.encode(new Uint8Array([0xfe, 0xff])), "*Y7");
  t.assertEquals(Base41QR.decode("000"), new Uint8Array([0, 0]));
  t.assertEquals(Base41QR.decode("*-H"), new Uint8Array([0xff, 0xff]));
  t.assertThrows(() => Base41QR.decode("---"));
  t.assertThrows(() => Base41QR.decode("*-I"));
});
Deno.test("pubkey", () => {
  /*
  const prikey = sec.prikey();
  console.log(Base41QR.encode(prikey));
  */
  const prikey = Base41QR.decode("%7DGKQN1SSI0CS7%WMS$UCDBIJJJ2166HTVKFV1*XB3T2G%*");
  const pubkey = sec.pubkey(prikey);
  
  //console.log(Base41QR.encode(pubkey));
  t.assertEquals(Base41QR.encode(pubkey), "3GUC$$L4+%QALJOYKQYY49JQ9V5K+MMU9TNWVGAE3Z6GBY5P");
  const data = new Uint8Array([0]);
  const sign = sec.sign(prikey, data);
  t.assertEquals(Base41QR.encode(sign), "7JG2DTJ+RH60CG5L5HR++X3632K50NZ77S91B$X0DVK8V%J+XVJI2MIW9Z28HRE45KELVC-X7JXIX4H4WB5HN2Q$7RH-DW5P");
  t.assert(sec.verify(sign, pubkey, data));
});
