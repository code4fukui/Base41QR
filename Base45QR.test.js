import * as t from "https://deno.land/std/testing/asserts.ts";
import { Base45QR } from "./Base45QR.js";
import * as sec from "https://code4fukui.github.io/sec.js/sec.js";

Deno.test("simple encode", () => {
  t.assertEquals(Base45QR.encode(new Uint8Array([65, 66])), "BB8");
  t.assertEquals(Base45QR.encode(new TextEncoder().encode("Hello!!")), "%69 VD92EX0");
});
Deno.test("simple decode", () => {
  t.assertEquals(Base45QR.decode("BB8"), new Uint8Array([65, 66]));
  t.assertEquals(Base45QR.decode("%69 VD92EX0"), new TextEncoder().encode("Hello!!"));
});
Deno.test("pubkey", () => {
  //const prikey = sec.prikey();
  //console.log(Base45QR.encode(prikey));
  const prikey = Base45QR.decode("7AKYNMVZK2ZLLBB-HT+JDI%JF%JG53%%FLLN3V34 81/D0+G");
  const pubkey = sec.pubkey(prikey);
  //console.log(Base45QR.encode(pubkey));
  t.assertEquals(Base45QR.encode(pubkey), "O63BW84HS23E9Q3H4252I1LC*-LI79RN6N U8U7V.7LSI93G");
  const data = new Uint8Array([0]);
  const sign = sec.sign(prikey, data);
  t.assertEquals(Base45QR.encode(sign), "JUPYZO$+E7M7I62LMS0 QUSG5$HDF4J1S+-52WD4LT :BDQE61Q8+MLP0QVD+LTTH3S:BW%HHB3YG5+:9XCNV-K7XHE.K4WT");
  t.assert(sec.verify(sign, pubkey, data));
});

