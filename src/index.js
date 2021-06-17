import cipher from './cipher.js';

const encryptButton = document.getElementById("encryptButton");
encryptButton.onclick = function (eventCode) {
    let codeOffset = parseInt(document.getElementById("numberToCipher").value);
    let encryptText = document.getElementById("encryptDiary").value;
    document.getElementById("encryptDiary").value = cipher.encode(codeOffset, encryptText);
    eventCode.preventDefault();
}

const copeButton = document.getElementById("copyButton");
copeButton.onclick = function (){
    document.getElementById("encryptDiary").select();
    document.execCommand("copy");
}