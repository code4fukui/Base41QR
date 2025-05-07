// from https://github.com/code4fukui/jsQR-es/blob/master/src/decoder/decodeData/index.ts#L104C1-L128C2

const AlphanumericCharacterCodes = [
  "0", "1", "2", "3", "4", "5", "6", "7", "8",
  "9", "A", "B", "C", "D", "E", "F", "G", "H",
  "I", "J", "K", "L", "M", "N", "O", "P", "Q",
  "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
  " ", "$", "%", "*", "+", "-", ".", "/", ":",
];

export function decodeAlphanumeric(stream /* BitStream */, size) {
  //const bytes = []; // number[]
  let text = "";

  //const characterCountSize = [9, 11, 13][size];
  //let length = stream.readBits(characterCountSize);
  let length = size;
  while (length >= 2) {
    const v = stream.readBits(11);

    const a = Math.floor(v / 45);
    const b = v % 45;

    //bytes.push(AlphanumericCharacterCodes[a].charCodeAt(0), AlphanumericCharacterCodes[b].charCodeAt(0));
    text += AlphanumericCharacterCodes[a] + AlphanumericCharacterCodes[b];
    length -= 2;
  }

  if (length === 1) {
    const a = stream.readBits(6);
    //bytes.push(AlphanumericCharacterCodes[a].charCodeAt(0));
    text += AlphanumericCharacterCodes[a];
  }

  //return { bytes, text };
  return text;
}
