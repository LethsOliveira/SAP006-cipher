import cipher from './cipher.js';

console.log(cipher);
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
encryptButton.onclick = function(eventCode) {
    let codeOffset = parseInt(document.getElementById("numberToCipher").value);
    let encryptText = document.getElementById("encryptDiary").value;  
    document.getElementById("encryptDiary").value = cipher.encode(codeOffset, encryptText);
    eventCode.preventDefault();
    console.log(cipher.encode(codeOffset, encryptText));
}

let decryptButton = document.getElementById("decryptButton");
decryptButton.onclick = function(eventDecode) {
    let codeOffset = parseInt(document.getElementById("numberToCipher").value);
    let decryptText = document.getElementById("decryptDiary").value;  
    document.getElementById("decryptDiary").value = cipher.encode(codeOffset, decryptText);
    eventDecode.preventDefault();
    console.log(cipher.encode(codeOffset, decryptText));
}
