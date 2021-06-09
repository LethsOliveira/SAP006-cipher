import cipher from './cipher.js';

/*
let numerOfLetters = document.getElementById("choosing");
let start = document.getElementById("startButton").click();

function choosingElement (){
    let choosingEncrypt = document.getElementById("encrypt").click()
    
    if ( choosingEncrypt === true && codeOffset >= 0){
                
    }
} 

let choosingDecrypt = document.getElementById("decrypt").click();
let choosing = document.getElementById("goButton").click();
*/


let encryptButton = document.getElementById("encryptButton");
encryptButton.onclick = function (eventCode) {
    let codeOffset = parseInt(document.getElementById("numberToCipher").value);
    let encryptText = document.getElementById("encryptDiary").value;
    document.getElementById("encryptDiary").value = cipher.encode(codeOffset, encryptText);
    eventCode.preventDefault();
}

let decryptButton = document.getElementById("decryptButton");
decryptButton.onclick = function (eventDecode) {
    let decodeOffset = parseInt(document.getElementById("numberToDecode").value);
    let decryptText = document.getElementById("decryptDiary").value;
    document.getElementById("decryptDiary").value = cipher.decode(decodeOffset, decryptText);
    eventDecode.preventDefault();
}
