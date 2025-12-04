import * as t from "https://deno.land/std/testing/asserts.ts";
import { Base41QR } from "./Base41QR.js";
import * as sec from "https://code4fukui.github.io/sec.js/sec.js";

Deno.test("simple encode", () => {
  t.assertEquals(Base41QR.encode(new Uint8Array([65, 66])), "J*9");
  t.assertEquals(Base41QR.encode(new TextEncoder().encode("Hello!!")), "11B-KG$%GX0");
  t.assertEquals(Base41QR.encode(new Uint8Array([1, 2, 3, 4, 5])), "C60YI050");
});
Deno.test("simple decode", () => {
  t.assertEquals(Base41QR.decode("J*9"), new Uint8Array([65, 66]));
  t.assertEquals(Base41QR.decode("11B-KG$%GX0"), new TextEncoder().encode("Hello!!"));
  t.assertEquals(Base41QR.decode("C60YI050"), new Uint8Array([1, 2, 3, 4, 5]));
});
Deno.test("pubkey", () => {
  /*
  const prikey = sec.prikey();
  console.log(Base41QR.encode(prikey));
  */
  const prikey = Base41QR.decode("3OO8DRWEMQBANOSAEFX%LCDK4Y2W6NZCVAA7TD$ZHU4E21B4");
  const pubkey = sec.pubkey(prikey);
  //console.log(Base41QR.encode(pubkey));
  t.assertEquals(Base41QR.encode(pubkey), "Q*TM0XTD6AQADD4WMPN%YQNX*W$XMJFH1YDX-272*UVK$G8U");
  const data = new Uint8Array([0]);
  const sign = sec.sign(prikey, data);
  t.assertEquals(Base41QR.encode(sign), "OZOCMCEVVYKQ0CSU12G92EMK2SUXFLLG31YSX*D7G1WXN%7XRWVSPZ*QCK86OEU00$0EX61Z1E$ECIYTD8YA97EZV9JXIIE3");
  t.assert(sec.verify(sign, pubkey, data));
});
