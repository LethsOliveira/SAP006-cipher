const cipher = {
  encode: function(offset, string){
    let result = "";
    for (var i = 0; i<string.length; i++){
      let ascNumber = string[i].charCodeAt();
      if (ascNumber >= 65 && ascNumber <= 90){
        result += string.fromCharCode(ascNumber+getElementById("numberOfLetters"))
      }
    }
  }
  decode: function(offset, string){
    return
  }
};

export default cipher;
