import cipher from './cipher.js';

const encryptButton = document.getElementById("encryptButton");
encryptButton.onclick = function (eventCode) {
    let codeOffset = parseInt(document.getElementById("numberToCipher").value);
    let encryptText = document.getElementById("encryptDiary").value;
    document.getElementById("encryptDiary").value = cipher.encode(codeOffset, encryptText);
    eventCode.preventDefault();
}

//const copyButton.addEventListener(click, ()){
    
/*let copyText (){
    const inputText = document.getElementById("encryptDiary").value;
    inputText.select();
    document.execCommand('copy');
}*/
