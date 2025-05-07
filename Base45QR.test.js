import * as t from "https://deno.land/std/testing/asserts.ts";
import { Base45QR } from "./Base45QR.js";

Deno.test("simple", () => {
  const test = new Uint8Array(256);
  for (let i = 0; i < 256; i++) {
    test[i] = i;
  }

  const enc = Base45QR.encode(test);
  console.log(enc);
  /*
  t.assertEquals(enc.length, TEST.length);
  t.assertEquals(enc, TEST);
  */
});
/*
Deno.test("decode", () => {
  const test = new Uint8Array(256);
  for (let i = 0; i < 256; i++) {
    test[i] = i;
  }
  const s = "AAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIjJCUmJygpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltcXV5fYGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6e3x9fn+AgYKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmZqbnJ2en6ChoqOkpaanqKmqq6ytrq+wsbKztLW2t7i5uru8vb6/wMHCw8TFxsfIycrLzM3Oz9DR0tPU1dbX2Nna29zd3t/g4eLj5OXm5+jp6uvs7e7v8PHy8/T19vf4+fr7/P3+/w==";
  const bin = Base64.decode(s);
  //console.log("bin", bin.length);
  t.assertEquals(bin, test);
});

const chk = (b1, b2) => {
  t.assertEquals(b1.length, b2.length);
  for (let i = 0; i < b1.length; i++) {
    t.assertEquals(b1[i], b2[i]);
  }
};

Deno.test("performance", () => {
  const size = 1024 * 1024; // 600msec(atob/btoa too slow) -> no assert 25msec
  //const size = 1024 * 1024 * 10; // 10sec -> no assert 143msec
  // const size = 1024 * 1024 * 64;
  const test = new Uint8Array(size);
  //t.assertEquals(Base64.decode(Base64.encode(test)), test);
  Base64.decode(Base64.encode(test)); // 143msec
  //chk(Base64.decode(Base64.encode(test)), test);
  //t.assertEquals(Base64.encode(test), null); // TEST); // 25msec
  //Base64.decode(Base64.encode(test));
  //t.assertEquals(Base64.encode(test), TEST); // 25msec
});

Deno.test("short", () => {
  const bin = new Uint8Array([0]);
  t.assertEquals(Base64.encode(bin), "AA==");
  t.assertEquals(Base64.decode("AA=="), bin);
});
*/
