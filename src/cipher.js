const cipher = {
  encode: function (offset, string) {
    let result = "";
    for (let i = 0; i < string.length; i++) {
      let ascNumberEncode = string[i].charCodeAt();
      if (ascNumberEncode >= 65 && ascNumberEncode <= 90) {
        let encodeResult = ((ascNumberEncode + 65 + offset) % 26) + 65;
        result += String.fromCharCode(encodeResult);
      } else if (ascNumberEncode >= 97 && ascNumberEncode <= 122) {
        let encodeResult = ((ascNumberEncode + 97 + offset) % 26) + 97;
        result += String.fromCharCode(encodeResult);
      } else {
        result += string[i];
      }
    }
    return result;
  },

  decode: function (offset, string) {
    let result = "";
    for (let i = 0; i < string.length; i++) {
      let ascNumberDecode = string[i].charCodeAt();
      if (ascNumberDecode >= 65 && ascNumberDecode <= 90) {
        let decodeResult = 90 - ((90 - ascNumberDecode + offset) % 26);
        result += String.fromCharCode(decodeResult);
      } else if (ascNumberDecode >= 97 && ascNumberDecode <= 122) {
        let decodeResult = 122 - ((122 - ascNumberDecode + offset) % 26);
        result += String.fromCharCode(decodeResult);
      } else {
        result += string[i];
      }
    }
    return result;
  }
}

export default cipher;
