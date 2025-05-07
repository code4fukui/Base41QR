export const BASE45QRS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";

const encode = (bin) => {
  const txt = [];
  for (let i = 0; i < bin.length; i += 2) {
    if (i < bin.length - 1) {
      let n = (bin[i] << 8) | bin[i + 1];
      const n3 = n % 45;
      n = (n - n3) / 45;
      const n2 = n % 45;
      const n1 = (n - n2) / 45;
      txt.push(BASE45QRS.charAt(n3));
      txt.push(BASE45QRS.charAt(n2));
      txt.push(BASE45QRS.charAt(n1));
    } else {
      const n = bin[i];
      const n3 = n % 45;
      const n2 = (n - n3) / 45;
      txt.push(BASE45QRS.charAt(n3));
      txt.push(BASE45QRS.charAt(n2));
    }
  }
  return txt.join("");
};

const decode = (s) => {
  const get = (c) => {
    const n = BASE45QRS.indexOf(c);
    if (n < 0) throw new Error("illegal char");
    return n;
  };
  const bin = [];
  for (let i = 0; i < s.length; i += 3) {
    if (i < s.length - 2) {
      const n3 = get(s[i]);
      const n2 = get(s[i + 1]);
      const n1 = get(s[i + 2]);
      const n = n3 + n2 * 45 + n1 * (45 * 45);
      bin.push(n >> 8);
      bin.push(n & 0xff);
    } else {
      const n3 = get(s[i]);
      const n2 = get(s[i + 1]);
      const n = n3 + n2 * 45;
      bin.push(n);
    }
  }
  return new Uint8Array(bin);
}

export const Base45QR = { encode, decode };
