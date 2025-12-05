export const BASE41QRS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ$%*+-"; // length == 41

// 41 char types
  // 0-9: 10
  // A-Z: 26
  // $%*+-: 5
// 41*41*41 = 68921 < 65535

const encode = (bin) => {
  const txt = [];
  for (let i = 0; i < bin.length; i += 2) {
    if (i < bin.length - 1) {
      let n = (bin[i] << 8) | bin[i + 1];
      const n3 = n % 41;
      n = (n - n3) / 41;
      const n2 = n % 41;
      const n1 = (n - n2) / 41;
      txt.push(BASE41QRS[n1]);
      txt.push(BASE41QRS[n2]);
      txt.push(BASE41QRS[n3]);
    } else {
      const n = bin[i];
      const n2 = n % 41;
      const n1 = (n - n2) / 41;
      txt.push(BASE41QRS[n1]);
      txt.push(BASE41QRS[n2]);
    }
  }
  return txt.join("");
};

const decode = (s) => {
  const get = (c) => {
    const n = BASE41QRS.indexOf(c);
    if (n < 0) throw new Error("illegal char");
    return n;
  };
  const bin = [];
  for (let i = 0; i < s.length; i += 3) {
    if (i < s.length - 2) {
      const n1 = get(s[i]);
      const n2 = get(s[i + 1]);
      const n3 = get(s[i + 2]);
      const n = n3 + n2 * 41 + n1 * (41 * 41);
      if (n > 0xffff) throw new Error("illegal code")
      bin.push(n >> 8);
      bin.push(n & 0xff);
    } else if (i < s.length - 1) {
      const n1 = get(s[i]);
      const n2 = get(s[i + 1]);
      const n = n2 + n1 * 41;
      if (n > 0xff) throw new Error("illegal code")
      bin.push(n);
    } else {
      throw new Error("illegal length");
    }
  }
  return new Uint8Array(bin);
}

export const Base41QR = { encode, decode };
